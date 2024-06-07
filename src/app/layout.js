import { Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/navBar";
import ThemeProvider from "./theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script";
import Head from "next/head";
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "College Counsel | Expert Guidance for Your Academic Career",
  description: "Discover College Counsel, your one-stop solution for navigating higher education! Get expert guidance, comprehensive course selection, and insider knowledge on top universities like Manipal, JAIN, and Amity. Simplify your college application process and boost your confidence with College Counsel's professional courses tailored for students and working professionals. Say goodbye to information overload and make informed decisions about your academic future today!",
  author:'College Counsel',
  keywords:"College Counsel, college guidance, higher education, undergraduate courses, postgraduate courses, professional courses, Manipal University, JAIN University, Amity University, college application process, college admission, career guide, BA, BCom, BBA, BCA, MA, MCA, MBA, MSc"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     <Script id="messenger-widget-b" defer src="https://cdn.botpenguin.com/website-bot.js" >6647981f07af820cc774bacd,664797f8881a65150d0aa425</Script>
    
      <body className={frankRuhlLibre.className}>
       <nav>
        <NavBar/>
       </nav>
       <ToastContainer/>
        <ThemeProvider>
          { children }
          </ThemeProvider>
          </body>
    </html>
  );
}
