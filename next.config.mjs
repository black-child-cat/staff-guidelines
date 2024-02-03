/** @type {import('next').NextConfig} */
const nextConfig = {};
const isProd = process.env.NODE_ENV === "production";

// export default nextConfig;
export default {
  reactStrictMode: true,
  // GitHub Pages用に設定
  assetPrefix: isProd ? "/staff-guidelines/" : "",
  basePath: isProd ? "/staff-guidelines" : "",
  publicRuntimeConfig: {
    basePath: isProd ? "/staff-guidelines" : "",
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export async function getStaticPaths() {
  const paths = {
    "/": { page: "/" },
    "/category": { page: "/category" },
    // 他の静的ページ...
  };

  const categoryPages = [
    "mindset",
    "interviewing",
    "trial",
    "attendance",
    "phone",
    "booking",
    "preparing",
    "transporting",
    "service",
    "interpersonal",
    "office",
    "social",
    "media",
    "exiting",
    "communication",
    "compliance",
    "Miscellaneous",
  ];

  // 各ユーザーIDに対してパスを生成
  categoryPages.forEach((categorySlug) => {
    paths[`/category/${categorySlug}`] = {
      page: "/category/[categorySlug]",
      slug: { categorySlug },
    };
  });

  return { paths, fallback: false };
}
