import Link from "next/link";
import { Button } from "@/components/ui/button";
import Apply from "../Components/Apply";

export default function Page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0077b6] to-[#00b7ff] md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6]/80 to-[#00b7ff]/80 backdrop-blur-sm" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 p-6 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold sm:text-4xl">College Counsel</h2>
            <p className="max-w-md text-lg">
              Get Better University at affordable price
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <Link href="/about" className="text-sm underline underline-offset-4" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <Apply />
      </div>
    </section>
  );
}
