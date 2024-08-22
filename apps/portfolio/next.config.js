// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withTM = require('next-transpile-modules')(['@portfolio/ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@portfolio/core', '@portfolio/ui'],
  eslint: {
    dirs: ['src'],
  },
  basePath:
    process.env.IS_SUB_DIRECTORY === 'true' ? process.env.APP_CONTEXT : '',
  publicRuntimeConfig: {
    basePath:
      process.env.IS_SUB_DIRECTORY === 'true' ? process.env.APP_CONTEXT : '',
  },

  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
