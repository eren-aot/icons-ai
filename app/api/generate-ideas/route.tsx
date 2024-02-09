import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req : Request){

    try {

        const body = req.json();
        const {prompt} = await body;

        if(!prompt) {
            console.log("Prompt is required !!!")
            return new NextResponse("Prompt is required !!!");
        }

        const openai = new OpenAI({
            apiKey : process.env.OPENAI_API_KEY
        });

        const completion = await openai.chat.completions.create({
            model : "gpt-3.5-turbo",
            messages : [
                { role : "system",content : "You are a helpful assitant who suggests App name "},
                {role : "user",content : `Give me app name based on the description ${prompt}`}
,            ],
        });

        console.log(completion.choices[0]);

        return NextResponse.json({name : completion.choices[0].message.content});

        
    } catch (error) {
        
        console.log("ERROR GENERATING APP IDEA",error);
        return new NextResponse("Error generating App Ideas")
    }

}