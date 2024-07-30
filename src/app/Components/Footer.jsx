import Link from "next/link";
import React from "react";
import { CourseList, Legal, MoreList, SocialLinks } from "../Data/footer";
import {
  Instagram,
  MessageCircleMore,
  Facebook,
  Linkedin,
  Twitter,
  Copyright,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import dayjs from "dayjs";

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  whatsapp: MessageCircleMore,
};
const currentYear = dayjs().year();
const Footer = () => {
  return (
    <div className=" border-t overflow-hidden bg-gray-200 pt-4 lg:pt-12 relative">
      <div className="md:mb-[10vw] mb-10 mx-auto">
        <div className=" container p-5 md:p-[2rem] z-20  flex flex-col-reverse lg:flex-row justify-between gap-10 ">
          <div className="lg:w-[40%] pb-10">
            <Image width={130} height={100} src="/logo/collegeCounsel.webp" alt="college counsel"/>
            <p className="text-gray-600 text-sm mt-6">
              Get admission in your dream University and course through College
              Counsel and get expert counselling and guidance along with
              scholarship options.
            </p>
            <p className="hover:underline font-medium whitespace-nowrap flex">
              <Copyright className="w-4" />
              &nbsp;<span>{currentYear}</span>&nbsp; All rights reserved
            </p>
            <div className="flex flex-col justify-end mt-20 md:mt-14 gap-2">
              <p className="gap-2 flex items-center"><span><Phone className="w-5"/></span>+919569822903, +916392832171</p>
              <p className="flex gap-2 items-center"><span><Mail className="w-5"/></span>mail@collegecounsel.co.in</p>
            </div>
          </div>
          <div className="footerLinks grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-[50%] xl:w-[60%] gap-2 xl:gap-16">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Social links</h3>
              {SocialLinks.map((social, ind) => {
                const Icon = icons[social.icon];
                return (
                  <Link
                    target="#"
                    className="flex gap-2 items-center"
                    key={ind}
                    href={social.path}
                  >
                    <span>
                      <Icon className="w-4" />
                    </span>
                    {social.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Courses</h3>
              {CourseList.map((course, ind) => (
                <Link key={ind} href={course.path}>
                  {course.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">More</h3>
              {MoreList.map((data, ind) => (
                <Link key={ind} href={data.path}>
                  {data.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              {Legal.map((data, ind) => (
                <Link key={ind} href={data.path}>
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          Made in India, with ❤️
        </div>
      </div>
      <div className=" text-center w-full flex justify-center">
        <span className=" whitespace-nowrap absolute z-10 bottom-0 font-bold leading-[80%] text-[35px] md:text-[10vw] uppercase bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-200">
          College Counsel
        </span>
      </div>
    </div>
  );
};

export default Footer;
