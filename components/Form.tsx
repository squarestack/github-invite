"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { githubUsernameSchema } from "../lib/validator";

export function Form() {
 const [isInvalid, setIsInvalid] = useState<boolean>(false);
 const [input, setInput] = useState<string>("");
 const [loading, setLoading] = useState<boolean>(false);

 const changeText = (e: ChangeEvent<HTMLInputElement>): void => {
  const { value } = e.target;
  setInput(value);

  const validation = githubUsernameSchema.safeParse({ username: value });
  setIsInvalid(!validation.success);
 };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  const loadingToast = toast.loading("Sending invite...");
  setLoading(true);

  if (!input) {
   setLoading(false);
   toast.error("Please enter your username!", { id: loadingToast });
   return;
  }

  const validation = githubUsernameSchema.safeParse({ username: input });
  if (!validation.success) {
   setLoading(false);
   toast.error(validation.error.errors[0].message, { id: loadingToast });
   return;
  }

  try {
   const res = await fetch("/api/invite", {
    body: JSON.stringify({ username: input }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
   });

   setLoading(false);

   if (res.status === 200) {
    toast.success("Invite sent! Check your email.", { id: loadingToast });
   } else {
    const { message } = await res.json();
    toast.error(message.replaceAll("Invitee", "User"), { id: loadingToast });
   }
  } catch (error) {
   console.error(error);
   setLoading(false);
   toast.error("Something went wrong! Please try again later.", { id: loadingToast });
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <label htmlFor="input" className="flex justify-center">
    <span className="sr-only">Github Username</span>
    <input
     id="input"
     type="text"
     className={`${isInvalid ? "border-red-400 bg-red-400/10 text-red-400 placeholder:text-red-400!" : "border-white/20"} rounded-lg border bg-white/10 px-4 py-2 text-white outline-hidden duration-200 placeholder:text-white/50 motion-reduce:transition-none`}
     placeholder="Enter your Github username"
     onChange={changeText}
    />
    <button
     className="!focus:bg-white ml-2 flex cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white outline-hidden duration-200 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none"
     disabled={loading || isInvalid || !input || input.length < 3}
     type="submit"
    >
     {loading ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block size-6 animate-spin text-white">
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
       />
      </svg>
     ) : (
      "Join us!"
     )}
    </button>
   </label>
  </form>
 );
}
