"use client";

import { useState } from "react";

export function Form() {
 const [input, setInput] = useState("");
 const [loading, setLoading] = useState(false);
 const [error, setErrorMessage] = useState("");
 const [success, setSuccess] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setErrorMessage("");

  if (!input) {
   setErrorMessage("Please enter your username!");
   setLoading(false);
   return;
  }

  const res = await fetch("/api/invite", {
   body: JSON.stringify({
    username: input,
   }),
   headers: {
    "Content-Type": "application/json",
   },
   method: "POST",
  });
  if (res.status === 200) {
   setSuccess(true);
   setErrorMessage("");
  } else {
   try {
    const { message } = await res.json();
    setErrorMessage(message.replaceAll("Invitee", "User"));
    setSuccess(false);
   } catch (e) {
    setErrorMessage("Something went wrong! Please try again later.");
    setSuccess(false);
   }
  }
  setLoading(false);
 };

 return (
  <form onSubmit={handleSubmit}>
   <label htmlFor="input" className="flex justify-center">
    <span className="sr-only">Github Username</span>
    <input
     id="input"
     type="name"
     autoFocus
     className={`${error ? "border-red-400 bg-red-400/10 text-red-400 placeholder:text-red-400" : "border-white/20 "} rounded-lg border bg-white/10 px-4 py-2 text-white outline-none duration-200 placeholder:text-white motion-reduce:transition-none`}
     placeholder="Enter your Github username"
     onChange={(e) => {
      setInput(e.target.value);
      setErrorMessage("");
     }}
    />
    <button className="!focus:bg-white ml-2 flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white outline-none duration-200 hover:bg-white/20 motion-reduce:transition-none">{loading ? <div className="spinner inline-block h-6 w-6 animate-spin rounded-full border-2 text-white" role="status" /> : "Join us!"}</button>
   </label>
   <div className="flex flex-col items-center justify-center py-2">
    {error && <p className="text-red-400">{error}</p>}
    {success && <p className="text-green-500">Success! Check your email for an invite!</p>}
   </div>
  </form>
 );
}
