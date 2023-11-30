/** @type {import('next').NextConfig} */
const nextConfig = {};
const { images } = require("next");
module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};
