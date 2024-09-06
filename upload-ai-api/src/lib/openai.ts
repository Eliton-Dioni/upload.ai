import 'dotenv/config';
import { OpenAI } from 'openai';

export const openaiEnv = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});