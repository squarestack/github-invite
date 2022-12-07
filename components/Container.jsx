import { useRouter } from "next/router";
import { Nav } from "./Nav";
import Head from "next/head";

export function Container(props) {
 const { children, ...customMeta } = props;
 const router = useRouter();
 const meta = {
  ...customMeta,
 };

 return (
  <>
   <Head>
    <title>{meta.title}</title>
    <meta content={meta.description} name="description" />
    <meta property="og:url" content={meta.url + router.asPath} />
    <link rel="canonical" href={meta.url + router.asPath} />
   </Head>
   <Nav />
   <div className="flex min-h-screen flex-col bg-[url('/background.png')] bg-cover bg-fixed bg-no-repeat antialiased">{children}</div>
  </>
 );
}
