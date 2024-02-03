import React from "react";

import Link from "next/link";

import { useCategory } from "@/context/CategoryContext";
import { usePosts } from "@/context/PostContext";

function CategoryPage(props) {
  const { posts, isLoading: PostisLoading } = usePosts();
  const { categories } = useCategory();

  if (PostisLoading) return <p>Loading...</p>;

  // propsからparamsを抽出
  const { params } = props;

  const categoryData = categories.find(
    (category) => category.slug === params.slug
  );
  // console.log(categoryData);
  // console.log(params.slug);
  return (
    <div className="flex flex-col">
      <div className="py-3 px-4 border-b border-gray-100 flex flex-col gap-1">
        <h1 className="font-bold text-3xl text-gray-800 font-Shippori-Mincho">
          {categoryData.title}
        </h1>
        <div class="text-sm font-Shippori-Mincho opacity-70 order-[-1]">
          第{categoryData.id}章
        </div>
        <span className="text-xs text-indigo-500 font-Kiwi-Maru py-1">
          {categoryData.en}
        </span>
      </div>
      <main className="flex flex-col px-4 flex-grow">
        {/* posts配列からカテゴリー名と一致するものだけを絞り込む */}
        {Object.entries(posts)
          .filter(([categoryVal, items]) => categoryVal === categoryData.title)
          .map(([categoryVal, items], i) => {
            return items.length > 0 ? (
              items.map((item, index) => {
                return (
                  <article key={index} id={`i-` + (i + 1)}>
                    <div className="py-6 border-b border-dashed">
                      <div className="">
                        <h2 className="font-bold text-xl">{item[1]}</h2>
                        <p className="">{item[2]}</p>
                      </div>
                      <div className="flex flex-col gap-3 py-3">
                        <div className="border border-gray-100 rounded-lg shadow-sm p-4">
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center justify-center bg-red-50 text-red-600 rounded-md px-3 py-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width={18}
                                height={18}
                              >
                                <path d="M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"></path>
                              </svg>
                              <span className="font-Kiwi-Maru">悪い例</span>
                            </div>
                            <p className="font-bold text-lg">{item[3]}</p>
                          </div>
                        </div>
                        <div className="border border-gray-100 rounded-lg shadow-sm p-4">
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center justify-center bg-green-50 text-green-600 rounded-md px-3 py-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -1 24 24"
                                fill="currentColor"
                                width={18}
                                height={18}
                              >
                                <path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path>
                              </svg>
                              <span className="font-Kiwi-Maru">良い例</span>
                            </div>
                            <p className="font-bold text-lg">{item[4]}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg py-4 px-5">
                        <p className="text-gray-800 leading-[1.8] font-Kiwi-Maru">
                          {item[5]}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div key={i}>記事が存在しない場合</div>
            );
          })}
        <div className="py-7 px-4">
          <p className="text-gray-700 leading-[1.65]">
            例として出している内容は一例です。いろんな女性がいるので、すべての女性が同じ考え方をしている訳ではないかもしれません。
            しかし、不特定多数の女性と一緒に仕事をしていくのであれば、一般論として同じような価値基準をもっていたり、さまざまな考え方や思考をもっている人がいるということを理解するべきです。
          </p>
        </div>
      </main>
      <nav className="border-t border-gray-100 py-2">
        <ol className="flex gap-1 overflow-x-scroll px-4">
          <li className="flex gap-2 items-center text-gray-300">
            <Link
              href="/"
              className="text-gray-600 text-sm hover:text-blue-500"
            >
              TOP
            </Link>
            <svg
              class="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li className="flex gap-2 items-center text-gray-300">
            <Link
              href="/category"
              className="text-gray-600 text-sm hover:text-blue-500"
            >
              目次
            </Link>
            <svg
              class="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li className="">
            <span className="text-gray-600 text-sm">{categoryData.title}</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { params } };
}

export default CategoryPage;
