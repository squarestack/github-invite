const CompressionPlugin = require("compression-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
 reactStrictMode: true,
 pageExtensions: ["mdx", "md", "jsx", "js"],
 poweredByHeader: false,
 trailingSlash: false,
 compress: true,
 experimental: {
  fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
 },
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: [
     {
      key: "Referrer-Policy",
      value: "no-referrer",
     },
     {
      key: "X-Content-Type-Options",
      value: "nosniff",
     },
     {
      key: "X-DNS-Prefetch-Control",
      value: "on",
     },
     {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
     },
     {
      key: "Strict-Transport-Security",
      value: "max-age=31536000; includeSubDomains; preload",
     },
     {
      key: "Cache-Control",
      value: "public, max-age=21600, must-revalidate",
     },
     {
      key: "X-XSS-Protection",
      value: "1; mode=block",
     },
     {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=()",
     },
    ],
   },
   {
    source: "/(.*).xml",
    headers: [
     {
      key: "Content-Type",
      value: "application/xml",
     },
    ],
   },
  ];
 },
 webpack: (config, { isServer, dev }) => {
  if (!dev && !isServer) {
   config.plugins.push(
    new CompressionPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
     "process.env.VERSION": JSON.stringify(process.env.npm_package_version),
    })
   ),
    (config.optimization.minimizer = [new TerserPlugin()]);
  }
  return config;
 },
};
