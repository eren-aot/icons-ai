import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {

    try {

        const body = await req.json();
        const { description, colors, style } = body;

        if(!description){
            return new NextResponse("Description is required!!!!");
        }
        if(!colors){
            return new NextResponse("Description is required!!!!");
        }
        if(!style){
            return new NextResponse("Description is required!!!!");
        }

        const openai = new OpenAI({
            apiKey : process.env.OPENAI_API_KEY
        })

        const image = await openai.images.generate({
            model : "dall-e-2",
            prompt : `Generate aicon based on the description ${description}.The color of the icon should be ${colors}.The Style of the icon should be ${style}.`
        })

        console.log(image.data)

        return NextResponse.json({image : image.data},{status : 200})

    } catch (error) {
        console.log("ERROR GENERATING IMAGES", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}