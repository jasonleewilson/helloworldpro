import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
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
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      <div className='grid grid-flow-col h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
        <h1>About page.</h1>
        <Link to={"/test"} className='text-white'>
          Test
        </Link>
        <div className='container pl-24'>
          <div className='text-black w-40 h-40 bg-custom-red'></div>
          <div className='text-black w-40 h-40 bg-custom-darkred'></div>
          <div className='text-black w-40 h-40 bg-custom-lightgrey'></div>
          <div className='text-black w-40 h-40 bg-custom-mediumgrey'></div>
          <div className='text-black w-40 h-40 bg-custom-darykgrey'></div>
        </div>
        <br />
        <div className='container pl-24'>
          <div className='text-black w-40 h-40 bg-custom-darkblue'></div>
          <div className='text-black w-40 h-40 bg-custom-lightblue'></div>
          <div className='text-black w-40 h-40 bg-custom-blue'></div>
          <div className='text-black w-40 h-40 bg-white'></div>
          <div className='text-black w-40 h-40 bg-custom-orange'></div>
        </div>
      </div>
    </main>
  );
}
