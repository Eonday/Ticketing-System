import 'dotenv/config';
import OpenAI from "openai";


const AI_KEY = process.env.AI_KEY;
const client = new OpenAI({
    apiKey:AI_KEY,
});

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Generate a random proffesional email using the gmail suffix and just include the email text in the output",
});

console.log(response.output_text);
