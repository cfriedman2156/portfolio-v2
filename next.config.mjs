/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    appDir: true, // Ensure App Router is used correctly
  },
  output: 'standalone', // ✅ Forces SSR (server-side rendering)
};

export default nextConfig;
