import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import "styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 metadataBase: new URL("https://just-that.vercel.app"),
 title: {
  default: "Just.it",
  template: "%s | Just.it",
 },
 description: "We are building open source projects with strong focus on user privacy. Our goal is to make the Internet more secure. In our applications everything is encrypted - in fact even we don't have access to users' data.",
 image: "/images/og.png",
 canonical: "/",
 openGraph: {
  title: "Just.it",
  description: "We are building open source projects with strong focus on user privacy. Our goal is to make the Internet more secure. In our applications everything is encrypted - in fact even we don't have access to users' data.",
  url: "/",
  siteName: "Just.it",
  images: [
   {
    url: "/images/og.png",
    width: 1920,
    height: 942,
   },
  ],
  locale: "en_US",
  type: "website",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
 twitter: {
  title: "Just.it",
  author: "@it_is_just_that",
  card: "summary_large_image",
 },
 icons: {
  shortcut: "/favicon.ico",
 },
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body className={GeistSans.className}>
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070706] bg-hero py-2 antialiased duration-200">
     {children}
     <Toaster // prettier
      richColors={false}
      position="bottom-center"
      theme="dark"
      closeButton={false}
      visibleToasts={4}
      loadingIcon={
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 animate-spin text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
       </svg>
      }
      expand={false}
     />
     <Analytics />
    </main>
   </body>
  </html>
 );
}
