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
  title: "UniCompare | Unlock your career with ultimate Online Learning Platform",
  description: "UniCompare is your ultimate guide to online learning platforms. Unlock knowledge and elevate your education with expert insights and resources. Get admission in top universities like Manipal, JAIN, and Amity.",
  author: 'UniCompare',
  keywords: "UniCompare, college guidance, higher education, undergraduate courses, postgraduate courses, professional courses, Manipal University, JAIN University, Amity University, college application process, college admission, career guide, BA, BCom, BBA, BCA, MA, MCA, MBA, MSc, online education, distance learning, career counseling",
  ogTitle: "UniCompare | Unlock your career with ultimate Online Learning Platform",
  ogDescription: "UniCompare is your ultimate guide to online learning platforms. Unlock knowledge and elevate your education with expert insights and resources. Get admission in top universities like Manipal, JAIN, and Amity.",
  ogUrl: "https://unicompare.co.in",
  ogImage: "https://unicompare.co.in/logo/DHF.png",
  ogType: "website",
  ogSiteName: "UniCompare",
  twitterCard: "summary_large_image",
  twitterSite: "@CollegeCnslHQ",
  twitterCreator: "@CollegeCnslHQ",
  twitterTitle: "UniCompare | Unlock your career with ultimate Online Learning Platform",
  twitterDescription: "UniCompare is your ultimate guide to online learning platforms. Unlock knowledge and elevate your education with expert insights and resources. Get admission in top universities like Manipal, JAIN, and Amity.",
  twitterImage: "https://unicompare.co.in/logo/DHF.png",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${process.env.BASE_URL}`,
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <meta name="fast2sms" content="RXDZUkA5csHVqGV0olsFUg5mLswVMY9r"/>

   
      <Script type="application/ld+json" id="organization-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "UniCompare",
          "url": "https://unicompare.co.in",
          "logo": "https://unicompare.co.in/logo/cc.png",
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
            "https://www.facebook.com/UniCompare",
            "https://www.instagram.com/unicompareofficial"
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
