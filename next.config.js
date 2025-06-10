/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    optimizeServerReact: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
    memoryBasedWorkersCount: true,
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
          }
        },
      }

      // 最適化設定
      config.optimization.minimize = true
      config.optimization.minimizer = config.optimization.minimizer || []
    }

    return config
  },
}

module.exports = nextConfig 