/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dmbxx03vp/**", // Adjust the pathname if necessary
      },
    ],
  },
};

export default nextConfig;
