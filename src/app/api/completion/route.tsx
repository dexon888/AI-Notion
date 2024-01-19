import {OpenAIApi, Configuration} from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"
// /api/completion

const config = new Configuration ({
    apiKey : process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function POST(req: Request) {
    const { prompt } = await req.json()

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: "system",
                content: "You are a helpful AI embedded in a notion text editor app that is used to autocomplete sentences. The traits include expert knowledge, helpfulness, cleverness, and articulated. The AI is well-behaved and is kind/inspiring and is eager in providing vivid and thoughtful responses"
            },
            {
                role: 'user',
                content: `I am writing a piece of text in a notion text editor app. Help me complete my train of thought here: ##${prompt}. Keep the tone of the text consistent with the rest of the text. Keep the response short and sweet.`
            }
        ],
        stream: true
    })
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream);
}