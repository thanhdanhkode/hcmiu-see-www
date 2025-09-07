import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [new URL('https://see.hcmiu.edu.vn/**'), new URL('https://w.ladicdn.com/**')],
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
