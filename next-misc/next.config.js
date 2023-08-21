/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/old-blog/:postid',
        destination: '/new-blog/:postid',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
