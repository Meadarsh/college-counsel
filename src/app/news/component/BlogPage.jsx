"use client";
import React, { useEffect, useState } from "react";
import { SearchBar } from "./post-search";
import PostSort from "./post-sort";
import PostCard from "./post-card";
import PaginationComponent from "./Pagination";
import NewsLoader from "./NewsLoader";

const ITEMS_PER_PAGE = 12;

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [sortedNews, setSortedNews] = useState([]);
  const [shortNews, setShortNews] = useState("latest");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const GetBlogs = async () => {
    try {
      const response = await fetch("api/news/getNews");
      const data = await response.json();
      setLoading(false);
      setNews(data);
      setSortedNews(data);
      definePage(data.length);      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetBlogs();
  }, []);

  useEffect(() => {
    sortBlogs(shortNews);
  }, [shortNews, news]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const definePage = (length) => {
    const totalPages = Math.ceil(length / ITEMS_PER_PAGE);
    setTotalPages(totalPages);
  };

  const sortBlogs = (sortOption) => {
    let sorted = [];
    if (sortOption === "latest") {
      sorted = [...news].reverse();
    } else if (sortOption === "oldest") {
      sorted = [...news];
    }
    setSortedNews(sorted);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = sortedNews?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="w-full h-full relative pt-24 px-2 sm:px-6 lg:px-[10%] md:px-10">
      <div className="w-full flex flex-col ">
        <h1 className="text-3xl font-semibold">News</h1>
        <p className="text-primary">
          Unlocking Boundless Opportunities: Your Path to Online Degrees with
          College counsel
        </p>
      </div>
      <div className="flex flex-col items-end md:flex-row py-6 md:py-10 gap-4 md:justify-between">
        <SearchBar posts={news} />
        <PostSort
          value={shortNews}
          onSort={(value) => setShortNews(value)}
          options={[
            { value: "latest", label: "Latest" },
            { value: "oldest", label: "Oldest" },
          ]}
        />
      </div>
      <div className="min-h-[60vh] ">
        {loading ? (
          <NewsLoader />
        ) : (
          <>
            {currentBlogs && (
              <div className="grid gap-3 lg:gap-4 grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentBlogs.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))}
              </div>
            )}
          </>
        )}
        {news.length >= 1 && (
          <div className="py-10">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
