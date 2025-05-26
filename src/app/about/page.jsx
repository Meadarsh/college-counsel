import React from "react";
import Image from "next/image";
import List from "../Components/List";

export const metadata = {
  title: "What is College Counsel ? - College Counsel",
  description:
    "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical: `${process.env.BASE_URL}/about`,
  },
};
const Page = () => {
  return (
    <>
      <div className="mt-20 text-lg p-5 lg:p-10">
        <Image
          className=" rounded-xl h-auto"
          priority
          alt="College counsel Image"
          width={1900}
          height={600}
          src="/image/about-img.webp"
        />

        <h1 className="text-4xl font-semibold mt-6">
          All About College Counsel You Need To Know!
        </h1>
        <h2 className="text-2xl font-semibold mt-6">
          Finding yourself confused in a sea of college choices? College Counsel
          is here to help you!{" "}
        </h2>
        <p>
          Hello there, the future grads! Are you feeling entirely burdened by
          the effort of selecting a college course? Navigating the world of
          higher education may be a stressful task, with many university
          choices. But don&apos;t worry, College Counsel is here to be your
          friendly guide!
          <br />
          <br />
          College Counsel is a one-stop shop for all things undergraduate (BA,
          BCom, BBA, BCA) and postgraduate (MA, MCA, MBA, MSc). We provide
          professional courses to assist you make educated choices regarding
          your academic career.
          <br />
          <br />
          College Counsel is more than just a mere website. Here at College
          Counsel we provide{" "}
          <u>
            courses designed for students as well as for working professionals
          </u>
          .
        </p>
        <h2 className="text-2xl font-semibold mt-6">
          Why to Choose College Counsel as your Career Guide?
        </h2>
        <List style="tick" data={listData} />
        <h1 className="text-2xl font-semibold mt-6">
          We have tied-up with Top Universities like:
        </h1>
        <List style="star" data={CollegeList} />
        <p>
          Lost in a sea of universities? We understand it! College Counsel
          allows you to research many colleges and their courses all in one
          spot. <br />
          <br />
          We&apos;ll provide you the information you need for analysing courses,
          faculty skills, and campus culture, making your final decision simple.{" "}
          <br />
          <br />
          So what are you waiting for? Visit College Counsel{" "}
          <a className="text-blue-700" href="http://collegecounsel.co.in">
            http://collegecounsel.co.in
          </a>{" "}
          today and let us guide you on your path to academic success! <br />
          <br />
          Remember that with the correct assistance and resources, you can
          navigate through the web of college choices and discover the ideal
          course to kick-start your future! P.S. Stay tuned for our next blog
          post, where we&apos;ll go further into individual courses and help you
          find your perfect academic match!
        </p>
      </div>
    </>
  );
};

export default Page;

const listData = [
  {
    id: 1,
    value: `Our courses are prepared by experienced professionals who understand the changing nature of higher education. Here at College Counsel you will get the right information to make the right choice for your future career.`,
  },
  {
    id: 2,
    value: `We provide a wide variety of courses to meet different interests and career goals. We have something for everyone, whether you're interested in business (BBA, MBA), creativity (BA), technology (BCA, MCA), or everything in between!`,
  },
  {
    id: 3,
    value: ` College Counsel has partnerships with major universities such as Manipal University, JAIN University, Amity University, and more! As a result, you will receive useful knowledge about these schools' application processes and admission requirements.`,
  },
  {
    id: 4,
    value: `From creating an impressive personal statement to knowing deadlines and admission exams, College Counsel has you prepared. Our courses and methods will walk you through each stage of the application process, ensuring that you put your best foot forward and receive that acceptance letter. `,
  },
  {
    id: 5,
    value: `Stop visiting countless websites. College Counsel is a single point for everything college-related. You may compare organisations, view their courses, and learn about campus life all in one spot. No more information overload, just plain and concise instructions. `,
  },
  {
    id: 6,
    value: `With College Counsel on your side, you'll go into the college application process with information and confidence. Knowing you have the right resources and assistance will reduce tension and allow you to focus on what is most important: acing your exams and preparing for success in college!`,
  },
];
const CollegeList = [
  { id: 1, value: "Amity University" },
  { id: 2, value: "Manipal University" },
  { id: 3, value: "JAIN University" },
  { id: 4, value: "Lovely University" },
  { id: 5, value: "DY Patil University" },
  { id: 6, value: "GLA University" },
  { id: 7, value: "Chandigarh University" },
  { id: 8, value: "UPES University" },
  { id: 9, value: "Shoolini University" },
  { id: 10, value: "Amrita University" },
];
