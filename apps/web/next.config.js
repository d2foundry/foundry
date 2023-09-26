const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@foundry/ui"],
};
module.exports = withContentlayer(nextConfig);
