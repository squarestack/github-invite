import { useRouter } from "next/router";
import Head from "next/head";

export function Container(props) {
 const { children, ...customMeta } = props;
 const router = useRouter();
 const meta = {
  url: "https://invite.squarestack.vercel.app",
  image: "https://invite.squarestack.vercel.app/images/og-image.png",
  description: "We are building open source projects with strong focus on user privacy. Our goal is to make the Internet more secure. In our applications everything is encrypted - in fact even we don't have access to users' data.",
  ...customMeta,
 };

 return (
  <>
   <Head>
    <title>{meta.title}</title>
    <meta content={meta.description} name="description" />
    <meta property="og:url" content={meta.url + router.asPath} />
    <link rel="canonical" href={meta.url + router.asPath} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Square Stack" />
    <meta property="og:description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:image" content={meta.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@stack_square" />
    <meta name="twitter:creator" content="@stack_square" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#000000"></meta>
   </Head>
   <div className="flex min-h-screen flex-col bg-[#070706] antialiased">{children}</div>
  </>
 );
}
