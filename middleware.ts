import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isUserSession = request.cookies.get('pardy-token')
  if (request.nextUrl.pathname === '/dashboard' && !isUserSession) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}
