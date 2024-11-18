const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/adnixmedia',
  output: 'export'
};

export default nextConfig;