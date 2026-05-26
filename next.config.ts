/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      { protocol: 'https', hostname: 'picsum.photos' },
      // Dominios para logos de integraciones comunes
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org', // Muy útil para iconos vectoriales
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Fuente común para logos oficiales
      },
      {
        protocol: 'https',
        hostname: '*.wp.com', // A veces usado por logos en sitios WordPress
      },
      {
        protocol: 'https',
        hostname: 'blog.servitalent.com'
      },
        {
        protocol: 'https',
        hostname: 'marketplace.innovaciondespachos.com'
      }
      
    ],
  },
};

export default nextConfig;