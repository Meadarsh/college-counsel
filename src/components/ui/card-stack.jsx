"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CardStack = ({
  items,
  offset,
  image,
  scaleFactor,
}) => {
  const [number,setNumber]=useState(1)
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items||[]);
  const intervalRef = useRef(null); // useRef to store the interval ID

  useEffect(() => {
    startFlipping();
    return () => clearInterval(intervalRef.current);
  }, [image]);

  const startFlipping = () => {
    setNumber(cards.length)
    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        const lastCard = newArray.pop();
        if (lastCard !== undefined) {
          newArray.unshift(lastCard); // move the last element to the front if it's not undefined
        }
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative lg:h-[50vh] lg:w-[40vw] w-[90vw] lg:m-0 m-auto h-[30vh] ">
     {cards?.slice(0,number).map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-[100%] w-[100%]  rounded-3xl overflow-hidden shadow-xl border"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
           {image?<Image loading="eager" width={780} priority="true" height={520} className="h-full w-full object-cover" src={card.url} />:<> <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="p-4">
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div></>}
          </motion.div>
        );
      })}
    </div>
  );
};
