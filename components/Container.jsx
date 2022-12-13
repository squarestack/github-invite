import { useRouter } from "next/router";
import { Nav } from "./Nav";
import Head from "next/head";

export function Container(props) {
 const { children, ...customMeta } = props;
 const router = useRouter();
 const meta = {
  url: "https://invite.squarestack.vercel.app",
  ...customMeta,
 };

 return (
  <>
   <Head>
    <title>{meta.title}</title>
    <meta content={meta.description} name="description" />
    <meta property="og:url" content={meta.url + router.asPath} />
    <link rel="canonical" href={meta.url + router.asPath} />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
   </Head>
   <Nav />
   <div className="flex min-h-screen flex-col bg-[url('/background.png')] bg-cover bg-fixed bg-no-repeat antialiased">{children}</div>
  </>
 );
}
