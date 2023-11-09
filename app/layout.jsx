import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
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
     <Analytics />
    </main>
   </body>
  </html>
 );
}
