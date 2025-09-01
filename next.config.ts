import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
