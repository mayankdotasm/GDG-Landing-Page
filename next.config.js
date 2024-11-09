/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Added Cloudinary as an allowed domain for images
  },
};

module.exports = nextConfig;
