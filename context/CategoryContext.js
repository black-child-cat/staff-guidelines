import React, { createContext, useContext } from "react";

import { categories } from "@/lib/categories"; // カテゴリーデータをインポート

// Contextの作成時にデフォルト値を設定
const CategoryContext = createContext({ categories });

// Contextプロバイダーコンポーネント
export function CategoryProvider({ children }) {
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

// カスタムフック
export function useCategory() {
  return useContext(CategoryContext);
}
