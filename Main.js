//Setting up use for enviormental variables and OpenAi integration 
import 'dotenv/config';                             
import OpenAI from "openai";
// db.js
import sqlite3 from 'sqlite3';
sqlite3.verbose();

//Grab Api Key and inser into OpenAi client
const AI_KEY = process.env.AI_KEY;
const client = new OpenAI({
    apiKey:AI_KEY,
});


















//Generate Emails for tickets 
const response = await client.responses.create({
    model: "gpt-4.1",
    instructions: "Only output the email no extra text",
    input: "Generate a random proffesional email using the gmail suffix ",
});

console.log(response.output_text)
