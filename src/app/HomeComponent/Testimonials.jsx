"use client";

import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCard";
import React from "react";

export function Testimonials() {
  return (
    <div className=" z-10 rounded-md flex flex-col antialiased mt-16 gap-14  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <h2 className=' lg:text-3xl font-bold text-xl'>Our success stories</h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The college counsel service proved to be more than what I expected. The tips offered were great and the advising officials were genial and never hard to reach when asked questions on the process. With the assistance of these friends, I was in a position to get admission in the university of my choice. Highly recommend it!",
    name: "Abhishek Gupta",
  },
  {
    quote:
      "The main advantage that can be distinguished is the concern as for all my questions and queries, the employees of the site paid individual attention to me. Both of my counsellors were so careful to assimilate my goals and then give me very personalised advice so that I was successful in putting my best foot forward. These attributes were provided in every stage of the process that the two professionals displayed.",
    name: "Nandini",
  },
  {
    quote: "The college counsel service provided all round support from the initial stage to the final stage. Their advice on the different universities and courses were very helpful. They guided me in selecting a proper college and wrote a fine application which depicted my strong points.",
    name: "Nitin Singh",
  },
  {
    quote:
      "The structure of the exams and working in colleges can be a pressure to students, yet the counsel helped me to overcome all the stress and to organise the application for the college very properly. They helped me from choosing the schools that I wanted to go to, to helping prepare me for interviews. I literally wouldn’t have been able to do it without them!",
    name: "Kartikey Pandey",
  },
  {
    quote:
      "The counsellors thus have adequate information and relevant experience in college placements. They were very knowledgeable on the many and tedious procedures that were involved in the application process. I am thankful to them and wish others to get their services done as they really helped me!",
    name: "Avinash kumar",
  },
  {
    quote:
      "The college counsel service not only offered me professionalism but also the confidence boost motive. It was thus encouraging to receive their support and encouraging words as they encouraged me on. Thanks to them, I managed to get to one of the best universities in the country. Thank you!",
    name: "Himanshu Pandey",
  },
  {
    quote:
      "Learned how the counsellors presupposed my individualistic peculiarities and my goals I had in mind. They ensured that I got to the right colleges and assisted in coming up with the right application plan. They helped me a lot and without them I could not have been successful as I was.",
    name: "Girish Kumar",
  },
  {
    quote:
      "The assistance that I got on the college essays was breathtaking. The counsellors also assisted me in mind storming, working on my drafts and making my ideas appealing and logical. The critics’ feedback was useful and well-thought out which made my essays distinctive.",
    name: "Arindam Mukherjee",
  },
  {
    quote:
      "The counsellors were always ready to respond to my queries and assist, no matter to what extent or insignificance. They also demonstrate their responsiveness and eagerness to assist, which is rather important. I found that I was receiving all the support I needed all along the process.",
    name: "Bhumi Dwivedi",
  },
  {
    quote:
      "The college counsel service is utilitarian and client centred in achieving the students’ objective. Their methodical analysis procedures and focused work was a huge improvement for my application. Therefore, I want to encourage everyone to consider their help if you want to get into college.",
    name: "Kamlesh",
  },
];
