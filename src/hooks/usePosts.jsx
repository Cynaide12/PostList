import { useMemo } from "react";
export const useSortedPosts = (array, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...array].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return array;
  }, [sort, array]);
  return sortedPosts;
};
export const usePosts = (array, query, sort) => {
  const sortedPosts = useSortedPosts(array, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    if (sort === "title") {
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return sortedPosts.filter((post) => post.body.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
