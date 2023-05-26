const path = require('path');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      const originalEntry = config.entry;
      // eslint-disable-next-line no-param-reassign
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, './scripts//wdyr.ts');
        const entries = await originalEntry();

        if (entries['main.js'] && !entries['main.js'].includes(wdrPath)) {
          entries['main.js'].push(wdrPath);
        }
        return entries;
      };
    }

    return config;
  },
};

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  ...nextConfig,
});
