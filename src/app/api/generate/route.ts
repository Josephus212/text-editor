import Anthropic from '@anthropic-ai/sdk'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { content } = await req.json()
  
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY!,
  })

  const stream = await anthropic.messages.create({
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: `Enhance this text to be more descriptive and polished. 
Important: Your response MUST be between 18-50 words.

Original:
${content}

Rules:
- Improve descriptive language and flow
- Fix any grammar or structure issues
- Keep the same basic meaning
- Provide a single, enhanced version
- STRICT LIMITS: Minimum 18 words, Maximum 50 words
- Count your words carefully before responding`
      }
    ],
    model: 'claude-3-opus-20240229',
    stream: true,
  })

  // Convert the Anthropic stream to a Web API stream
  const textStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && 'text' in chunk.delta) {
          controller.enqueue(chunk.delta.text);
        }
      }
      controller.close()
    },
  })

  return new Response(textStream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
} 