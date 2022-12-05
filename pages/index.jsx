import { Container } from "../components/Container";
import Link from "next/link";
export default function Home() {
 return (
  <Container>
   <div className="flex min-h-screen flex-col items-center justify-center py-2 drop-shadow-[0_0_69px_rgba(255,255,255,0.6)] duration-200">
    <Link href="/" className="text-2xl font-bold leading-tight tracking-tighter text-white">
     <div className="flex items-center justify-center gap-4 text-5xl">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-rotate">
       <rect width="64" height="64" rx="9" fill="white" />
      </svg>
      <p>Square Stack</p>
     </div>
    </Link>
    <p className="pt-6 text-center text-2xl text-white">
     Join the community of developers
     <br />
     who are building the future of the web.
    </p>
    <div className="pt-6">
     <input type="email" autoFocus className="border-white/15 rounded-lg border bg-transparent px-4 py-2 text-white" placeholder="Enter your e-mail" />
     <button className="ml-2 rounded-lg bg-white px-4 py-2 text-black outline-none">Join us!</button>
    </div>
   </div>
  </Container>
 );
}
