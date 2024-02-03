// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CategoryProvider } from "@/context/CategoryContext";
import { PostProvider } from "@/context/PostContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>風俗店スタッフ向けガイドライン（仮）</title>
        <meta
          name="description"
          content="風俗店スタッフ向けガイドライン（仮）｜女性と円滑に働くための理解を培って、お互いに働きやすい環境を考えよう。"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>📚</text></svg>"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&family=Noto+Sans+JP:wght@500;700;900&family=Sawarabi+Gothic&family=Shippori+Antique+B1&family=Shippori+Mincho:wght@500;700;800&display=swap"
          rel="stylesheet"
        ></link>
        {/* その他の必要なメタタグやスクリプト */}
      </Head>

      <div className="h-screen flex flex-col bg-white">
        <Header />

        {/* ページコンテンツ */}
        <div className="sm:border-x sm:border-gray-100 flex-grow flex">
          <div className="max-w-[500px] w-full mx-auto flex">
            <CategoryProvider>
              <PostProvider>
                <Component {...pageProps} />
              </PostProvider>
            </CategoryProvider>
          </div>
        </div>

        {/* ここに共通のフッターコンポーネントを挿入 */}
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
