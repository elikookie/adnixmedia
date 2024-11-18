const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/adnixmedia/' : '',
  basePath: isProd ? '/adnixmedia' : '',
  output: 'export'
};

export default nextConfig;