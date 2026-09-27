const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@foundry/ui"],
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = withContentlayer(nextConfig);
