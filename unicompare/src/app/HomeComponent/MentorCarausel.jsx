"use client"
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { isMobile } from "react-device-detect";

export function MentorCarausel({ data }) {
  const { toast } = useToast();

  const copyToClipboard = (number) => {
    if (isMobile) {
      window.location.href = 'tel:'+number;
    } else {
      navigator.clipboard.writeText(number);
      toast({
        title: "Copied to clipboard",
      });
    }
  };
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        emblaCarouselAutoplay({
          delay: 6000,
        }),
      ]}
      className="lg:w-[75%] w-[85%]"
    >
      <CarouselContent>
        {data.map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 sm:basis-1/2 xl:basis-1/4 w-full"
          >
              <Card className="rounded-lg h-full border backdrop-blur-sm bg-[rgba(255,255,255,.1)]">
                <CardContent className="flex aspect-square flex-col lg:p-4 p-3">
                  <Image
                    className="h-2/3 w-full rounded-lg object-cover"
                    width={333}
                    height={218}
                    src={_.img}
                    alt="Mentor Image"
                  />
                  <div className="relative mt-4">
                    <p className="text-2xl font-semibold">{_.name}</p>
                    <p className="text-lg">{_.university}</p>
                    <p className="text-sm">{_.exp} Year Experience</p>
                    <div className="w-full lg:mt-2 flex justify-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="p-2" onClick={() => copyToClipboard(_.number)}>
                            +91 {_.number}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
