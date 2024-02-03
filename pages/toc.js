import Link from "next/link";

import { useCategory } from "@/context/CategoryContext";
import { usePosts } from "@/context/PostContext";

function Toc({ items }) {
  const { posts, PostisLoading } = usePosts();
  const { categories } = useCategory();

  if (PostisLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="bg-gray-800 rounded-md py-1 px-4 text-center">
        <h1 className="text-lg font-bold text-white leading-[1.5]">目次</h1>
      </div>
      <ul className="list-disc">
        {Object.entries(posts).map(([categoryVal, items], i) => {
          const categoriesData = categories.find(
            (category) => category.title === categoryVal
          );
          return (
            <li key={i} className="mb-6 list-none">
              <div className="py-3">
                <Link
                  href={`/category/` + categoriesData.slug}
                  className="flex gap-2 justify-between items-center border-b border-gray-100 py-2 text-gray-800 hover:text-indigo-500 transition"
                >
                  <div className="leading-[1.0]">
                    <h2 className="font-Shippori-Mincho text-xl font-bold">
                      {categoriesData.title}
                    </h2>
                    <p className="font-Kiwi-Maru text-indigo-300 text-xs">
                      {categoriesData.en}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm font-Shippori-Mincho opacity-70">
                      第{i + 1}章
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -1 24 24"
                      fill="currentColor"
                      className="opacity-30"
                      width={22}
                      height={22}
                    >
                      <path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
              <ul className="flex flex-col gap-3">
                {items && items.length > 0 ? (
                  items.map((item, index) => {
                    return (
                      <li key={index} className="list-none">
                        <Link
                          href={
                            `/category/` +
                            categoriesData.slug +
                            `/#i-` +
                            (index + 1)
                          }
                          className="text-gray-700 hover:text-blue-500 transition"
                        >
                          <div className="flex items-center gap-2 justify-between">
                            <div className="flex-grow relative after:absolute after:border-b after:border-dashed after:left-0 after:top-1/2 after:w-full">
                              <h2 className="text-sm bg-white relative z-[1] w-[fit-content] pr-2">
                                {item[2]}
                              </h2>
                            </div>
                            <span className="border px-2 rounded text-xs text-gray-500">
                              {i + 1 + `-` + (index + 1)}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <li className="bg-gray-50 rounded-md px-4 pb-3 text-center mt-3">
                    <div className="flex gap-3 items-center">
                      <img
                        src="/notfind.svg"
                        className="w-[5rem] mt-[-1.0rem]"
                        alt=""
                      />
                      <div className="flex-grow text-center">
                        <span className="text-xs text-indigo-300">
                          not find
                        </span>
                        <p className="text-gray-600 text-sm">
                          ※女性からの声が届いていません。
                        </p>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Toc;
