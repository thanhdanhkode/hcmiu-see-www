import type { NextRequest } from 'next/server'

type Responding = {
  message: string
}

export async function GET(request: NextRequest) {
  return Response.json({ message: 'Hello from the API' })
}
