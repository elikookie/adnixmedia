const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized:true,
  },
};

export default nextConfig;