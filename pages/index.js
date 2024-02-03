// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-[1]">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="flex flex-col gap-3 py-4 text-center">
          <h1 className="font-black text-gray-800 leading-[1.15] pb-2 font-Noto-Sans">
            <div className="text-[4.45rem] sm:text-[5.5rem]">風俗店勤務</div>
            <div className="text-[3rem] sm:text-[3.45rem] palt">
              業務ガイドライン
            </div>
          </h1>
          <div className="order-[-1] bg-gray-800 rounded-md py-1">
            <div className="font-bold text-xl text-white leading-[1.5]">
              風俗スタッフ用
            </div>
          </div>
        </div>
        <div className="text-center pb-6 relative">
          <figure className="px-8">
            <img src="/person.svg" className="w-full mx-auto" alt="" />
          </figure>
          <div className="absolute bottom-5 w-full h-1/2 flex flex-col pt-1">
            <div className="m-auto">
              <div className="font-bold text-2xl sm:text-[1.85rem] leading-[1.5] font-Kiwi-Maru bg-yellow-50 py-2 sm:py-4 px-3 sm:px-6 rounded-lg">
                女性の生の声を
                <br />
                ガイドラインに反映！
                <br />
                だから実用的
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white px-6 py-3">
        <div className="flex flex-col gap-2">
          <div className="pt-4 pb-2">
            <h2 className="text-2xl sm:text-[1.85rem] leading-[1.35] font-Shippori-Antique">
              女性と一緒に働くための
              <br />
              コミュニケーションを学ぼう
            </h2>
          </div>
          <p className="text-sm font-Sawarabi-Gothic leading-[1.65]">
            このサイトは、風俗業界で働く上で女性の気持ちや考え方を理解して、円滑に働くための情報を提供します。
            各カテゴリーに分けられたガイドラインを通して、さまざまな業務で意識すべきポイントを知り、理解を深めることができます。
          </p>
          <div className="sticky bottom-3 py-3 text-center">
            <Link
              href="/category"
              className="bg-white rounded-full px-5 py-2 border border-indigo-500"
            >
              <span className="inline-block text-gray-800 font-bold hover:text-blue-400">
                目次を見る
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="font-Shippori-Antique before:content-['Let_is_respect_\A_the_women_\A_we_work_with.'] before:text-gray-100 before:text-5xl before:font-bold before:pt-[50%] absolute top-2 p-8 z-[-1] h-full flex"></div>
    </div>
  );
}
