require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Resend } = require('resend');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// IMPORT YOUR MODELS AND SERVICES
const { analyzeLead } = require('./services/aiService');
const Enquiry = require('./models/Enquiry');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// 1. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Senior Architect: Database connected successfully.'))
  .catch((err) => console.error('❌ Database connection error:', err));

// 2. LOGGING SETUP
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), 
    { flags: 'a' }
);

// 3. MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));

// 4. ROUTES

// Health Check
app.get('/', (req, res) => {
  res.send('Mall of America Backend is ONLINE.');
});

// GET ALL LEADS (Classic View)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Enquiry.find().sort({ date: -1 });
    res.status(200).json({ success: true, count: leads.length, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching leads.' });
  }
});

// >>> STEP 27: AI SEARCH ROUTE <<<
// This allows you to search leads using natural language (e.g. /api/leads/search?query=retail)
app.get('/api/leads/search', async (req, res) => {
    const { query } = req.query;
    try {
      const leads = await Enquiry.find();
      
      // We send all leads to the AI to filter them based on your question
      const aiResponse = await analyzeLead({ 
          name: "Search Query", 
          company: "System", 
          message: `SEARCH TASK: Look at these leads: ${JSON.stringify(leads)}. Find leads related to: ${query}` 
      });
  
      res.status(200).json({ success: true, ai_search_result: aiResponse });
    } catch (error) {
      res.status(500).json({ success: false, message: 'AI Search failed.' });
    }
  });

// THE ENQUIRY ROUTE (Updated with AI Analysis)
app.post('/api/enquiry', async (req, res) => {
  const { name, email, company, message, enquiry_type } = req.body;

  // Validation Guard
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Validation Error.' });
  }

  try {
    // A. SAVE TO DATABASE
    const newEnquiry = new Enquiry({ name, email, company, message, enquiry_type });
    await newEnquiry.save();
    console.log("💾 Senior Architect: Lead saved to Database.");

    // B. STEP 26: ASK THE AI FOR ANALYSIS
    const aiAnalysis = await analyzeLead({ name, company, message });
    console.log("🤖 AI Analysis Complete:", aiAnalysis);

    // C. SEND EMAIL (Updated with AI Insights)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.SALES_EMAIL,
      subject: `New ${enquiry_type} Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #C9A84C; padding: 20px;">
          <h1 style="color: #0D1B2A;">New Lead + AI Analysis</h1>
          <div style="background: #F5F0E8; padding: 15px; border-left: 5px solid #C9A84C; margin-bottom: 20px;">
            <h3 style="margin-top: 0;">🤖 AI Intelligence Report:</h3>
            <p style="font-style: italic; color: #333;">"${aiAnalysis}"</p>
          </div>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'Processed with AI!',
      ai_report: aiAnalysis 
    });

  } catch (error) {
    console.error("❌ Process Error:", error);
    res.status(500).json({ success: false, message: 'Process failed.' });
  }
});

// 5. START SERVER
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Senior Architect: Server is live on port ${PORT}`);
});