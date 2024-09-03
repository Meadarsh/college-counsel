import { Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import "./customStyles.css";
import NavBar from "./Components/navBar";
import Script from "next/script";
import AutoPopup from "./Components/AutoPopup";
import Footer from "./Components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ReduxProvider } from "@/Redux/ReduxComponent";
import { TooltipProvider } from "@/components/ui/tooltip";
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "College Counsel | Empowering Career Choices Through Counseling",
  description:`Unlock your true potential with College Counsel! Our expert team is dedicated to empowering your career choices through personalized counseling. Whether you're navigating your education, exploring career paths, or seeking to advance in your current role, we provide tailored guidance to align your passions with opportunities. With College Counsel by your side, you'll gain the confidence and clarity needed to make informed decisions, ensuring your career path is not just a choice but a journey to success. Let us help you shape a future that's uniquely yours—start your journey with College Counsel today!`,
  author: 'College Counsel',
  keywords: "College Counsel, college guidance, higher education, undergraduate courses, postgraduate courses, professional courses, Manipal University, JAIN University, Amity University, college application process, college admission, career guide, BA, BCom, BBA, BCA, MA, MCA, MBA, MSc",
  ogTitle: "College Counsel | Empowering Your Career Choices Through Counseling",
  ogDescription: `Unlock your true potential with College Counsel! Our expert team is dedicated to empowering your career choices through personalized counseling. Whether you're navigating your education, exploring career paths, or seeking to advance in your current role, we provide tailored guidance to align your passions with opportunities. With College Counsel by your side, you'll gain the confidence and clarity needed to make informed decisions, ensuring your career path is not just a choice but a journey to success. Let us help you shape a future that's uniquely yours—start your journey with College Counsel today!`,
  ogUrl: "https://collegecounsel.co.in",
  ogImage: "https://collegecounsel.co.in/logo/DHF.png",
  twitterCard: "summary_large_image",
  twitterSite: "@CollegeCnslHQ",
  twitterCreator: "@CollegeCnslHQ",
  twitterTitle: "College Counsel | Empowering Your Career Choices Through Counseling",
  twitterDescription:`Unlock your true potential with College Counsel! Our expert team is dedicated to empowering your career choices through personalized counseling. Whether you're navigating your education, exploring career paths, or seeking to advance in your current role, we provide tailored guidance to align your passions with opportunities. With College Counsel by your side, you'll gain the confidence and clarity needed to make informed decisions, ensuring your career path is not just a choice but a journey to success. Let us help you shape a future that's uniquely yours—start your journey with College Counsel today!`,
  twitterImage: "https://collegecounsel.co.in/logo/DHF.png",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.BASE_URL}`,
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
   
      <Script type="application/ld+json" id="organization-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "College Counsel",
          "url": "https://collegecounsel.co.in",
          "logo": "https://collegecounsel.co.in/logo/cc.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919569822903",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "www.linkedin.com/in/college-counsel",
            "https://x.com/CollegeCnslHQ",
            "https://www.facebook.com/CollegeCounsel",
            "https://www.instagram.com/collegecounselofficial"
          ]
        })}
      </Script>
       <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-9CP19VTW20"
            strategy="lazyOnload"
          />
         <Script id="gtm-script" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9CP19VTW20');
            `}
          </Script>
     {/* <Script id="messenger-widget-b" defer src="https://cdn.botpenguin.com/website-bot.js" >6647981f07af820cc774bacd,664797f8881a65150d0aa425</Script> */}
      <body className={frankRuhlLibre.className}>
      <ReduxProvider>
      <TooltipProvider>
      <Toaster />
        <header>
        <NavBar/>
        </header>
       <AutoPopup/>
      { children }
         <footer>
         <Footer/>
         </footer>
          </TooltipProvider>
        </ReduxProvider>
          </body>
    </html>
  );
}
