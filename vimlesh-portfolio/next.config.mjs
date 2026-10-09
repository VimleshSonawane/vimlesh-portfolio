/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/home.html" }],
    };
  },
};

export default nextConfig;
