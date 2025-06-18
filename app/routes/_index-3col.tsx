import type { MetaFunction } from "@remix-run/cloudflare";
// import { Outlet } from "@remix-run/react";
// import hero from "../assets/images/her-opt.jpg";
// import ContactForm from "../components/Contact";
// import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - Building website line x line" },
    {
      name: "description",
      content: "Welcome to HelloWorldPro! - Building website line x line",
    },
  ];
};

export default function Index() {
  return (
    <>
      <h1>homepage dude</h1>
      <div className='container mx-auto grid grid-cols-3 gap-0 w-dvw h-screen bg-white'>
        <div className='w-full h-full bg-[#b93838] flex flex-col justify-center items-center text-white'>
          test1
        </div>
        <div className='w-full h-full bg-[#44c6cf]'></div>
        <div className='w-full h-full bg-[#bdb655]'></div>
        <div className='w-full h-full bg-[#53a16b]'></div>
        <div className='w-full h-full bg-[#2b3c86]'></div>
        <div className='w-full h-full bg-[#7a376a]'></div>
      </div>
    </>
  );
}
