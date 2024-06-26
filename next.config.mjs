/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/characters",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
