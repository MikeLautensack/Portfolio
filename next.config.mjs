/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Estimate Generator was replaced by ServiceClerk; keep old links working.
      {
        source: "/projects/estimate-generator",
        destination: "/projects/service-clerk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
