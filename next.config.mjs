
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ถ้าใช้ <Image /> ของ Next.js ต้องใส่
  },
};

export default nextConfig;
