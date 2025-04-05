import type { MetaFunction } from "@remix-run/cloudflare";
// import Hero from "~/components/Hero";
// import { Link } from "@remix-run/react";

// import ContactForm from "../components/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - About" },
    {
      name: "description",
      content:
        "Welcome to HelloWorldPro! - About - Building website line x line",
    },
  ];
};

export default function Index() {
  return (
    <>
      <section className='p-4 bg-slate-500'>
        <h1 className='text-xl md:text-2xl text-white font-extrabold '>
          About page.
        </h1>
      </section>

      <div className='container mx-auto'>
        <h1 className='pt-4 text-2xl md:text-6xl text-white font-extrabold shadow-black bg-transparent'>
          HELLOWORLD<span className='text-slate-600'>PRO</span>
        </h1>
        <h1 className='text-2xl text-white font-extralight bg-transparent'>
          building websites line by line.
        </h1>
      </div>

      <div className='container p-24 flex gap-4'>
        <div className='w-1/2 bg-blue-300 h-4 text-center'>1</div>
        <div className='w-1/2 bg-blue-300 h-4 text-center'>1</div>
      </div>

      <div className='container mx-auto grid grid-flow-row grid-cols-2 gap-4'>
        <div className='w-full bg-blue-300 h-40 text-center'>1</div>
        <div className='w-full bg-blue-300 h-40 text-center'>1</div>
      </div>

      <div className='container p-24'>
        <div className='w-1 bg-blue-300 h-4 text-center'>1</div>
        <div className='w-2 bg-blue-300 h-4 text-center'>1</div>
        <div className='w-3 bg-blue-300 h-4 text-center'>1</div>
        <div className='w-96 bg-blue-300 h-4 text-center'>1</div>
      </div>
      <section>
        <div className='container mx-auto mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 lg:grid-cols-12 gap-2'>
          <div className='h-12 bg-slate-400'>01</div>
          <div className='h-12 bg-slate-400'>02</div>
          <div className='h-12 bg-slate-400'>03</div>
          <div className='h-12 bg-slate-400'>04</div>
          <div className='h-12 bg-slate-400'>05</div>
          <div className='h-12 bg-slate-400'>06</div>
          <div className='h-12 bg-slate-400'>07</div>
          <div className='h-12 bg-slate-400'>08</div>
          <div className='h-12 bg-slate-400'>09</div>
          <div className='h-12 bg-slate-400'>10</div>
          <div className='h-12 bg-slate-400'>11</div>
          <div className='h-12 bg-slate-400'>12</div>
        </div>
      </section>

      <div className='h-12 bg-red-500 md:max-2xl:bg-slate-500'></div>
    </>
  );
}
