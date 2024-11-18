const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/adnixmedia/' : '',
  basePath: isProd ? '/adnixmedia' : '',
  output: 'export'
};

export default nextConfig;