"use client";
import React from "react";
import { HomepageCrausel } from "../Data/data";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card-hover-effect";
import { CardContent } from "@/components/ui/card";
import { RatingShowcase } from "../Data/landingpage";
const SecondPage = () => {

  return (
    <div className=" w-full mt-20">
      <div className="flex justify-evenly m-auto lg:w-[70%] w-[90%] rounded-2xl items-center border bg-white p-2 lg:h-[12vh]">
     {RatingShowcase.map((item,ind)=>(
       <div key={ind} className="flex gap-2 lg:gap-4 lg:flex-row flex-col justify-center items-center lg:w-52">
       <Image
         priority
         width={60}
         height={60}
         className="lg:w-12 w-8"
         src={item.src}
         alt={item.alt}
       />
       <div className="flex flex-col items-center lg:items-start">
         <p className="text-sm lg:text-2xl font-semibold">
           {item.rating}
         </p>
         <p className="font-normal leading-none text-[12px] md:text-sm lg:text-base">
           {item.description}
         </p>
       </div>
     </div>
     ))}</div>
      <div className="carausel flex mt-20 justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            emblaCarouselAutoplay({
              delay: 2000,
            }),
          ]}
          className="lg:w-[75%] w-[90%]"
        >
          <CarouselContent>
            {HomepageCrausel?.map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 w-full"
              >
                <div className="p-1">
                  <Card className="rounded-lg border backdrop-blur-sm bg-[rgba(255,255,255,.1)]">
                    <CardContent className="flex lg:p-4 p-3">
                      <Image
                        className="h-2/3 w-full rounded-lg object-cover"
                        width={333}
                        height={218}
                        alt="College counsel"
                        src={_}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="lg:block hidden" />
          <CarouselNext className="lg:block hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default SecondPage;
