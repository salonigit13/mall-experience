const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require('path');
const dotenv = require('dotenv');

// 1. Point exactly to the .env in the parent folder
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const analyzeLead = async (leadData) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Safety check for the API key
    if (!apiKey) {
      console.error("❌ AI Error: GEMINI_API_KEY is missing from .env");
      return "AI Analysis skipped: Configuration error.";
    }

    // 2. Initialize Gemini 2.5 Flash (The one that worked for you!)
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 3. Craft the Professional Prompt
    const prompt = `You are a real estate expert for Mall of America. 
    Analyze this inquiry:
    Name: ${leadData.name}
    Company: ${leadData.company}
    Message: ${leadData.message}
    
    Provide a 1-sentence summary and a "Hot" or "Cold" rating based on business potential.`;

    // 4. Generate and return the text
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();

  } catch (error) {
    // 5. Catch any unexpected errors without crashing the server
    console.error("🤖 Gemini Service Error:", error.message);
    return "AI Analysis temporarily unavailable. Please review manually.";
  }
};

module.exports = { analyzeLead };