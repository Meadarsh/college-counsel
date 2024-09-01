import { Check, Star } from "lucide-react";

const List = ({ style, data }) => {  
  return (
    <>
      {data &&
        data.map((txt, index) => (
          <div
            key={index}
            className=" mt-2 lg:mt-4 flex lg:gap-5 md:gap-3 gap-2"
          >
            <span>
              {style === "star" && (
                <Star className="text-[#FFD700] " />
              )}
              {style === "step" && (
                <span className=" whitespace-nowrap text-primary text-xl font-bold">
                  Step: {++index}&nbsp;&nbsp;
                </span>
              )}
              {style === "tick" && <Check className="text-primary" />}
              {style === "number" && <span className="font-semibold" >{++index}.</span>}
              {style === "alphabet" && <span className="font-semibold" >{String.fromCharCode(97 + index)}.</span>}
              {/* {style === "dot" && <span>●</span>} */}
              {style === "dot" && <span>●</span>}
            </span>
            <p className="font-medium text-md md:text-lg lg:text-xl">
              {txt.value || txt}
            </p>
          </div>
        ))}
    </>
  );
};

export default List;
