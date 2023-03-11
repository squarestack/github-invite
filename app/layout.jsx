import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: {
  default: "Square Stack",
  template: `%s | Square Stack`,
 },
 description: "We are building open source projects with strong focus on user privacy. Our goal is to make the Internet more secure. In our applications everything is encrypted - in fact even we don't have access to users' data.",
 image: "https://invite.squarestack.vercel.app/images/og-image.png",
 description: "We are building open source projects with strong focus on user privacy. Our goal is to make the Internet more secure. In our applications everything is encrypted - in fact even we don't have access to users' data.",
 openGraph: {
  title: "Square Stack",
  description: "We are building open source projects with strong focus on user privacy. Our goal is to make the Internet more secure. In our applications everything is encrypted - in fact even we don't have access to users' data.",
  url: "https://invite.squarestack.vercel.app",
  siteName: "Square Stack",
  images: [
   {
    url: "https://invite.squarestack.vercel.app/images/og-image.png",
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
  title: "Square Stack",
  author: "@stack_square",
  card: "summary_large_image",
 },
 icons: {
  shortcut: "/favicons/favicon.ico",
 },
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body className={`bg-main-white dark:bg-main-dark ${inter.className}`}>
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070706] bg-hero py-2 antialiased duration-200">
     <>{children}</>
     <Analytics />
    </main>
   </body>
  </html>
 );
}
