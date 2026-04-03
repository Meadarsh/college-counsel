import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react";

export default function AccordionExpandIcon({ data }) {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        {data?.map((e, ind) => (
          <AccordionItem key={ind} value={++ind} >
            <AccordionTrigger>
              <h3 className="text-xl">{`${++ind}. ${e.Question}`}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">{e.Answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
