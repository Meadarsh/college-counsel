import Link from "next/link";
import Apply from "../Components/Apply";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCard";
import { collegeLogo } from "../Data/collegeLogo";

const Page = () => {
  return (
    <section className="w-full mt-14 relative lg:mt-20 bg-gray-400 h-screen lg:h-[calc(100vh-80px)]">
      <Image className="object-cover" fill src={'/image/applybg.webp'}  />
      <div className="absolute right-0 top-0 h-full border-transparent border-[20px] w-full">
       <div className="h-full grid grid-cols-5 border-white box-border border-[12px] rounded-[20px]">
       <div className="relative min-h-32 col-span-5 lg:col-span-3 overflow-hidden">
         <InfiniteMovingCards
        items={collegeLogo}
        image={true}
        pauseOnHover={false}
        direction="right"
        speed="very-slow"
      />
        <InfiniteMovingCards
        items={collegeLogo}
        pauseOnHover={false}
        image={true}
        direction="left"
        speed="very-slow"
      />
        </div>
        <Apply />
       </div>
      </div>
    </section>
  );
}
export default Page;