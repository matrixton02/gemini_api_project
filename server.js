const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

const path = require('path');

const { GoogleGenerativeAI  } = require("@google/generative-ai");
const dotenv=require("dotenv");
dotenv.config();
// console.log(process.env.GEMINI_API_KEY);
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(text) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = "\nwhat is the time complexity of the above program in 1 word"
  
    const result = await model.generateContent( text + prompt);
    const response = await result.response;
    const output = response.text();
    return output;
}

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/send-text', async (req, res) => {
    const { text } = req.body;
    console.log('Received text:', text);
    const output =await run(text);
    res.send(" " + output);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

