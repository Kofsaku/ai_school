/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons', '@radix-ui/react-primitives'],
    optimizeServerReact: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
    memoryBasedWorkersCount: true,
    serverComponentsExternalPackages: ['sharp'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  compress: true,
  productionBrowserSourceMaps: false,
  generateEtags: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|lucide-react)[\\/]/,
            name: 'animations',
            priority: 20,
            reuseExistingChunk: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            priority: 30,
            reuseExistingChunk: true,
          },
          next: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'next',
            priority: 25,
            reuseExistingChunk: true,
          },
          ui: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'ui',
            priority: 15,
            reuseExistingChunk: true,
          }
        },
      }

      // 最適化設定
      config.optimization.minimize = true
      config.optimization.minimizer = config.optimization.minimizer || []
      
      // 不要なモジュールの除外
      config.externals = [...(config.externals || []), 'canvas', 'jsdom']
    }

    // 開発環境での最適化
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }

    return config
  },
  // 静的アセットのキャッシュ設定
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],
}

module.exports = nextConfig 