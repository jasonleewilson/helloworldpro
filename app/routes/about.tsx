import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
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
    <main className='flex min-h-screen flex-col items-center justify-between p-12 bg-red-500 md:max-2xl:bg-slate-500'>
      <div className='grid grid-flow-col h-auto w-full items-end justify-center bg-gradient-to-t from-white via-blue-500 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
        <h1>About page.</h1>
        <Link to={"/test"} className='text-black'>
          Test
        </Link>
        <br />
        <br />
        <Link to={"/test1"} className='text-black'>
          Test1
        </Link>
        <div className='container p-14'>
          <div className='text-black w-40 h-10 bg-custom-red'></div>
          <div className='text-black w-40 h-10 bg-custom-darkred'></div>
          <div className='text-black w-40 h-10 bg-custom-lightgrey'></div>
          <div className='text-black w-40 h-10 bg-custom-mediumgrey'></div>
          <div className='text-black w-40 h-10 bg-custom-darykgrey'></div>
        </div>
        <br />
        <div className='container p-14'>
          <div className='text-black w-40 h-10 bg-custom-darkblue'></div>
          <div className='text-black w-40 h-10 bg-custom-lightblue'></div>
          <div className='text-black w-40 h-10 bg-custom-blue'></div>
          <div className='text-black w-40 h-10 bg-white'></div>
          <div className='text-black w-40 h-10 bg-custom-orange'></div>
        </div>
        <div className='container p-24'>{/* Something here */}</div>
      </div>
      <div className='w-full absolute bottom-0'>
        <Footer />
      </div>
    </main>
  );
}
