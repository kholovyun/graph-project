'use client'
import { Inter } from "next/font/google";
import { Header } from "./Components/Header/Header";
import "./globals.css";
import { Providers } from "./Providers/ApolloProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Oswald} from 'next/font/google';


const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {
  return (
    <Providers>
      <html lang="en">
      <body className={inter.className + oswald.className}>
        <Header />
        <div className="container">
        {children}
        </div>
        <ToastContainer />
      </body>
    </html>
    </Providers>
  );
}
