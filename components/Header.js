// src/components/layout/Header.js
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-[500px] mx-auto mx-auto px-0">
        <div className="flex gap-3 items-center justify-center sm:justify-between">
          <Link href={`/`} className="text-md py-2 sm:py-0">
            <span className="font-extrabold">業務ガイドライン</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
