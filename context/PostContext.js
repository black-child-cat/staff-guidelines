// context/PostContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxCx5dNQUmDeitnHokl7OEnNpKetSvhqUSgUW7Tg3PJQf6qWHEThUKRGmSXLmaNa0V8/exec?action=grouped"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostContext.Provider>
  );
}

// カスタムフック
export function usePosts() {
  return useContext(PostContext);
}
