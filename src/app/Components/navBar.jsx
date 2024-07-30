"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAmp } from "next/amp";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const pathname = usePathname();
  const Links = [
    { href: "/", name: "Home" },
    { href: "/apply", name: "Apply" },
    { href: "/about", name: "About us" },
    { href: "/blog", name: "Blogs" },
  ];
  const isAmp = useAmp();
  const path = usePathname();
  const [mobNavOpen, setmobNavOpen] = useState(false);
  function OpenNav() {
    if (mobNavOpen === false) {
      setmobNavOpen(true);
    } else {
      setmobNavOpen(false);
    }
  }
  useEffect(() => {
    setmobNavOpen(false);
  }, [path]);
  return (
    <>
      <nav
        className={`bg-white mainNav w-[100vw] left-0 lg:h-20 h-14 md:h-16 z-50 fixed top-0 flex lg:justify-between items-center pr-2 lg:px-10`}
      >
        <div className="flex items-center gap-1 lg:gap-4">
          <Sheet>
            <SheetTrigger className=" shadow-none border-none" asChild>
              <Button className="px-3 lg:hidden min-w-10" variant="outline">
                <Menu className="text-4xl " />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-6">
                {Links.map((example, index) => (
                  <SheetClose asChild>
                    <Link
                      href={example.href}
                      key={example.href}
                      className={cn(
                        "flex h-10 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary",
                        pathname === example.href ||
                          (index === 0 && pathname === "/")
                          ? "bg-muted font-medium text-primary"
                          : "text-black"
                      )}
                    >
                      {example.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Image
            priority
            width={110}
            height={80}
            className="h-12 lg:h-14 w-auto object-contain"
            src="/logo/collegeCounsel.webp"
            alt="College Counsel"
          />
          <p className=" lg:text-md font-medium text-sm ">
            #ShikshaSeHiMilegiManzil
          </p>{" "}
        </div>
        <div className="lg:flex gap-5 hidden  min-w-[20%] ">
          {Links.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary",
                pathname === example.href || (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-black"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
export const config = { amp: "hybrid" };
export default NavBar;
