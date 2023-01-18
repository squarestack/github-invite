import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }) {
 return (
  <main>
   <Component {...pageProps} key={router.route} />
   <Analytics />
   </main>
 );
}
