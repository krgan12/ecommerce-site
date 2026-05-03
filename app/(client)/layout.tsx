import type { Metadata } from "next";
import { Inter, Noto_Sans, Playfair_Display, JetBrains_Mono, Figtree } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs";
import localFont from "next/font/local"

const raleway = localFont({
  src: '../fonts/Raleway.woff2',
  variable: "--font-raleway",
  weight: "100 900"
})

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});



export const metadata: Metadata = {
  title: "Tulos Ecommerce Store for Shoppers",
  description: "An Ecommerce app for shopping and education purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
      lang="en"
      // className={cn("h-full", "antialiased", playfairDisplayHeading.variable, jetbrainsMono.variable, "font-sans", inter.variable)}
      
    >
      <body className={`${raleway.variable} antialiased`}>
       <Header />
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  );
}
