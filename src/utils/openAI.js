// import OpenAI from 'openai';
// import { GPT_API_KEY } from './constants';

// const openAIGPT = new OpenAI({
//   apiKey: GPT_API_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true
// });

// export default openAIGPT;

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GPT_API_KEY, GEMINI_API_KEY } = require("./constants");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;