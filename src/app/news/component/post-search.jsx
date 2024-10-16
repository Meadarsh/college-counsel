"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { BookOpenText } from "lucide-react";

export function SearchBar({ posts }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = React.useCallback(
    (url) => {
      setOpen(false);
      router.push(url);
    },
    [router]
  );

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-10 w-full justify-start bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search News...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.2rem] hidden h-8 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[15px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search here..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {posts.map((post) => (
              <CommandItem
                key={post._id}
                value={post.title}
                onSelect={() => handleSelect(`/news/${post.url}`)}
              >
                <BookOpenText className="mr-2 h-4 w-4" />
                {post.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
