import React from 'react'
import { FaqsData } from '../Data/data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Faqs = () => {
  return (
    <div className=' w-full mt-[8vh] lg:mt-[15vh] flex flex-col items-center'>
         <h2 className=' lg:text-3xl font-bold text-xl'>
         FAQ's
        </h2>
        <div className="lg:w-[85%] md:w-[90%] w-[95%] mt-[5vh] flex justify-center">
        <Accordion className='w-full' type="single" collapsible>
      {FaqsData.map((section, index) => {
        const sectionTitle = Object.keys(section)[0];
        const sectionItems = section[sectionTitle];
        return (
          <div key={index}>
           <h3 className='lg:text-2xl mt-3 text-blue-700 font-bold text-lg'>{sectionTitle}</h3>
            {sectionItems.map((item, itemIndex) => (
              <AccordionItem key={itemIndex} value={item.question}>
                <AccordionTrigger>
                  <h4 className='lg:text-lg font-semibold text-medium'>{item.question}</h4>
                </AccordionTrigger>
                <AccordionContent className='w-full'>
                 <p className='text-black lg:text-lg break-words'> {item.answer}</p>
                  </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        );
      })}
    </Accordion>
     </div> 
    </div>
  )
}

export default Faqs