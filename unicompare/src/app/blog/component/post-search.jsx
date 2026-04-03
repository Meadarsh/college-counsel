"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar({ onSearch, initialValue = '' }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = React.useState(initialValue);
  const [isFocused, setIsFocused] = React.useState(false);

  // Update search term when URL changes (e.g., when navigating back)
  React.useEffect(() => {
    const search = searchParams.get('search') || '';
    setSearchTerm(search);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    } else if (e.key === 'Escape') {
      e.target.blur();
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    if (searchTerm) {
      onSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search blogs..."
          className="w-full pl-10 pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">Clear search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
      {isFocused && (
        <div className="absolute left-0 z-10 mt-2 w-full rounded-md bg-popover p-2 text-sm text-muted-foreground shadow-lg">
          Press Enter to search
        </div>
      )}
    </form>
  );
}
