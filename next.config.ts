const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath:"/adnixmedia",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;