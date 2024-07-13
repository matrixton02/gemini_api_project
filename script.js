let text;
function gettext(){
  var text_area = document.getElementById('code');
  text = text_area.value;
  console.log(text);
}

document.getElementById('sub').onclick = function() {
  gettext();
  run();
};

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "\nwhat is the time complexity of the above program in 1 word"

  const result = await model.generateContent( text + prompt);
  const response = await result.response;
  const output = response.text();
  console.log(output);
  alert(output)
}