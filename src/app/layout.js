import { Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import "./customStyles.css";
import NavBar from "./Components/navBar";
import Script from "next/script";
import AutoPopup from "./Components/AutoPopup";
import { useAmp } from "next/amp";
import Footer from "./Components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ReduxProvider } from "@/Redux/ReduxComponent";
import { TooltipProvider } from "@/components/ui/tooltip";
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "College Counsel | Expert Guidance for Your Academic Career",
  description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  author: 'College Counsel',
  keywords: "College Counsel, college guidance, higher education, undergraduate courses, postgraduate courses, professional courses, Manipal University, JAIN University, Amity University, college application process, college admission, career guide, BA, BCom, BBA, BCA, MA, MCA, MBA, MSc",
  ogTitle: "College Counsel | Expert Guidance for Your Academic Career",
  ogDescription: "Discover College Counsel, your one-stop solution for navigating higher education! Get expert guidance, comprehensive course selection, and insider knowledge on top universities like Manipal, JAIN, and Amity.",
  ogUrl: "https://collegecounsel.co.in",
  ogImage: "https://collegecounsel.co.in/logo/DHF.png",
  twitterCard: "summary_large_image",
  twitterSite: "@collegecounse1",
  twitterCreator: "@collegecounse1",
  twitterTitle: "College Counsel | Expert Guidance for Your Academic Career",
  twitterDescription: "Discover College Counsel, your one-stop solution for navigating higher education! Get expert guidance, comprehensive course selection, and insider knowledge on top universities like Manipal, JAIN, and Amity.",
  twitterImage: "https://collegecounsel.co.in/logo/DHF.png",
  robots: {
    index: true,
    follow: true,
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
            "https://twitter.com/CollegeCounsel",
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
       {/* <AutoPopup/> */}
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
