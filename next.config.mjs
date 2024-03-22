/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '',
          pathname: '**',
        },
        {
            protocol: 'https',
            hostname: 'aceternity.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'media.discordapp.net',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
            port: '',
            pathname: '**',
          },
      ],
    },
}
export default nextConfig;
