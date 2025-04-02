import { NextResponse } from "next/server"
import Groq from "groq-sdk"

// Initialize Groq SDK with API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

// Main POST function to handle the request
export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json()
    const input = body?.input // Extract 'input' from request body

    // Validate the input field
    if (!input) {
      return NextResponse.json({ error: "Missing or invalid 'input' in request body." }, { status: 400 })
    }

    // Function to generate response based on the input
    async function generateResponse(input: string) {
      const systemPrompt = `You are an AI assistant for Sultana Rupa, a creative Full Stack Developer with 4 years of experience.
      
      Here's information about Sultana:
      - Name: Sultana Rupa
      - Age: 21
      - Experience: 4+ years in modern web development
      - Email: mahiraakhter950@gmail.com
      - GitHub: https://github.com/AsTeriaa09
      - Completed over 30 projects including AI integration, real-time applications, containerized solutions, and modern web apps
      
      Skills:
      - Languages & Frameworks: JavaScript (ES6+), TypeScript, React, MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, HTML5, CSS3, TanStack Query, Redux
      - Styling: Bootstrap, Tailwind CSS, Materialize CSS, Responsive Web Design, Animation libraries
      - Database & Tools: MongoDB, Supabase, MySQL, PostgreSQL, Langchain, Postman, Vercel, Webpack, npm, Vector Database Integration, RESTful APIs, DevOps Basics
      - Version Control & Collaboration: Git, GitHub, Agile Practices
      
      Notable Projects:
      1. NeoCampus — Your Campus Companion
         - Technologies: Next.js, React, MongoDB, Socket.IO, Clerk
         - Features: Realtime menu & pre-order, realtime bus tracking, AR Map navigation, personalized AI assistant
      
      2. NeoHire — AI platform for professional success
         - Technologies: Next.js, React, MongoDB, Node.js, Clerk
         - Features: AI resume analyzer, voice-driven mock interviews, AI career insights
      
      3. ChatterBox — A feature-rich chatting application
         - Technologies: MongoDB, Express.js, React, Socket.IO
         - Features: Real-time messaging, media sharing, read receipts
         
     and many more projects which will be found on her gitub profile.
      
      Your task is to answer questions about Sultana's skills, experience, projects, and professional capabilities. Keep your answers concise, professional, and accurate based on the information provided. If you don't know something specific about Sultana that wasn't mentioned above, you can say you don't have that information rather than making it up.
      
      Be enthusiastic and highlight Sultana's strengths as a developer who specializes in creating beautiful, functional applications with modern technologies.`

      // Request Groq API to generate answers
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: input },
        ],
        model: "llama-3.1-8b-instant",
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.8,
        stream: false,
      })

      const aiResponse = chatCompletion.choices[0].message.content
      return aiResponse
    }

    // Generate the response
    const aiResponse = await generateResponse(input)

    // Return the AI response as a JSON response
    return NextResponse.json({ answer: aiResponse })
  } catch (err) {
    // Handle errors during the process
    console.error("Error invoking Groq:", err)
    return NextResponse.json({ error: "Failed to fetch the response from Groq." }, { status: 500 })
  }
}

