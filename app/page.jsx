import { Form } from "components/Form";

export const metadata = {
 title: "Join us",
};

export default function App() {
 return (
  <div className="relative w-full px-6">
   <div className="z-20 flex w-full flex-col">
    <span className="mx-auto mb-3 rounded-full border border-white/20 bg-white/10 px-9 py-2 font-medium text-white backdrop-blur-sm">From Vision to Reality:</span>
    <h1 className="text-center text-5xl font-extrabold leading-tight tracking-tight text-white">Building the future of the Web</h1>
    <p className="pt-3 text-center text-2xl text-white/70">
     Join the community of developers
     <br />
     who are building the future of the web.
    </p>
    <div className="pt-3">
     <Form />
    </div>
   </div>
   <div className="absolute inset-x-0 z-0 flex">
    <div className="relative z-0 aspect-1 size-[48%] rounded-full bg-purple-600 opacity-30 blur-[85px] sm:blur-[150px] md:blur-[200px] lg:blur-[250px]" />
    <div className="relative z-10 ml-auto aspect-1 size-[40.8%] rounded-full bg-purple-400 opacity-30 blur-[55px] sm:blur-[60px] md:blur-[110px] lg:blur-[160px]" />
   </div>
  </div>
 );
}
