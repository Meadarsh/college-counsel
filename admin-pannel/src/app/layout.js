"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeCustomization from "./themes";
import { AuthProvider } from "./context/authContext";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <AuthProvider>
      <ThemeCustomization>
      <ToastContainer/>
        {children}
        </ThemeCustomization>
      </AuthProvider>
        </body>
    </html>
  );
}
