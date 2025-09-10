"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import FeedPaginationComponent from "./FeedPagination";
import BlogLoader from "../../blog/component/BlogLoader";
import { SearchBar } from "@/app/blog/component/post-search";
import PostSort from "@/app/blog/component/post-sort";
import FeedCard from "./FeedCard";

const ITEMS_PER_PAGE = 12;

const FeedPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  
  // Get params from URL or use defaults
  const page = parseInt(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || '';
  const shortBlog = searchParams.get('shortBlog') || 'latest';

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      // Build query string from URL params
      const params = new URLSearchParams({
        page,
        limit: ITEMS_PER_PAGE,
        ...(search && { search }),
        shortBlog
      });
      
      const response = await fetch(`/api/ai-blog?${params.toString()}`);
      const { data } = await response.json();
      
      if (data && data.blogs) {
        // Sort blogs based on URL sort param
        setBlogs(data.blogs);
        setTotalItems(data.pagination?.total || 0);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  }, [page, search, shortBlog]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const updateURLParams = (updates) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Reset to page 1 when search or sort changes
    if (updates.search !== undefined || updates.sort !== undefined) {
      params.set('page', '1');
    }
    
    // Update the params with new values
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    // Update the URL without page reload
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSearch = (searchTerm) => {
    updateURLParams({ search: searchTerm });
  };

  const handleSort = (sortOption) => {
    updateURLParams({ shortBlog: sortOption });
  };

  const handlePageChange = (newPage) => {
    updateURLParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="w-full h-full relative pt-24 px-2 sm:px-6 lg:px-[10%] md:px-10">
      <div className="w-full flex flex-col">
        <h1 className="text-3xl font-semibold">Our feed</h1>
        <p className="text-primary">
          Unlocking Boundless Opportunities: Your Path to Online Degrees with
          College Counsel
        </p>
      </div>
      
      <div className="flex flex-col items-end md:flex-row py-6 md:py-10 gap-4 md:justify-between">
        <SearchBar onSearch={handleSearch} initialValue={search} />
        <PostSort
          value={shortBlog}
          onSort={handleSort}
          options={[
            { value: "latest", label: "Latest" },
            { value: "oldest", label: "Oldest" },
          ]}
        />
      </div>
      
      <div className="min-h-[60vh]">
        {loading ? (
          <BlogLoader />
        ) : (
          <>
            {blogs.length > 0 ? (
              <>
                <div className="grid gap-3 lg:gap-4 grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {blogs.map((post, index) => (
                    <FeedCard key={post._id || index} post={post} />
                  ))}
                </div>
                
                {totalItems > ITEMS_PER_PAGE && (
                  <div className="py-10">
                    <FeedPaginationComponent
                      currentPage={page}
                      totalPages={Math.ceil(totalItems / ITEMS_PER_PAGE)}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No blog posts found{search ? ` for "${search}"` : ''}.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
