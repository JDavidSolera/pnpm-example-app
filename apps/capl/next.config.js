/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@phoenix/core",
    "@phoenix/design-system",
    "@phoenix/hooks",
    "@phoenix/utils",
  ],
};

module.exports = nextConfig;
