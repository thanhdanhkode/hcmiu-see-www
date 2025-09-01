import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing.public'

export const middleware = createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
}
