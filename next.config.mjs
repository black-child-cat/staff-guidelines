/** @type {import('next').NextConfig} */
const nextConfig = {};
const isProd = process.env.NODE_ENV === "production";

export default nextConfig;
// module.exports = {
//   // GitHub Pages用に設定
//   assetPrefix: isProd ? "/staff-guidelines/" : "",
//   basePath: isProd ? "/staff-guidelines" : "",
//   publicRuntimeConfig: {
//     basePath: isProd ? "/staff-guidelines" : "",
//   },
//   exportPathMap: async function () {
//     const paths = {
//       "/": { page: "/" },
//       "/toc": { page: "/toc" },
//       "/category": { page: "/category" },
//       // 他の静的ページ...
//     };

//     return paths;
//   },
//   images: {
//     unoptimized: true,
//   },
//   output: "export",
// };
