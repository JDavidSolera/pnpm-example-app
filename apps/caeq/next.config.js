/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    "@phoenix/design-system",
    "@phoenix/core",
    "@phoenix/utils",
    "@phoenix/hooks",
  ],
  images: {
    domains: ["catalogo.movistar.com.pe", "solera-qa.s3.amazonaws.com"],
  }
};

module.exports = nextConfig;
