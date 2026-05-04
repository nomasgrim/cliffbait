/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com"
      },
      {
        protocol: "https",
        hostname: "assets.codepen.io"
      }
    ]
  },
  // Add the redirects section here
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'blog.cliffbait.com',
          },
        ],
        destination: 'https://cliffbait.com/blog/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;