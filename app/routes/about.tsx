import type { MetaFunction } from "@remix-run/cloudflare";
// import Hero from "~/components/Hero";
// import { Link } from "@remix-run/react";
import logo from "~/assets/images/logo.svg";
import image1 from "~/assets/images/bg-left.png";
import image2 from "~/assets/images/hero.webp";
import car from "~/assets/images/car.png";
import Lockup from "~/components/Lockup";
import Logo from "~/components/Logo";
import FixedBottomBanner from "~/components/FixedBottomBanner";
// import image1 from "~/assets/images/bg-left.webp";

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
      {/* <section className='p-4 bg-slate-500'>
        <h1 className='text-xl md:text-2xl text-white font-extrabold '>
          About page.
        </h1>
      </section> */}

      {/* <div className='container mx-auto'>
        <h1 className='pt-4 text-2xl md:text-6xl text-white font-extrabold shadow-black bg-transparent'>
          HELLOWORLD<span className='text-slate-600'>PRO</span>
        </h1>
        <h1 className='text-2xl text-white font-extralight bg-transparent'>
          building websites line by line.
        </h1>
      </div> */}

      {/* <div className='container p-24 flex gap-4'>
        <div className='w-1/2 bg-blue-300 h-4 text-center'>1</div>
        <div className='w-1/2 bg-blue-300 h-4 text-center'>1</div>
      </div>

      <div className='container mx-auto grid grid-flow-row grid-cols-2 gap-4'>
        <div className='w-full bg-blue-300 h-40 text-center'>1</div>
        <div className='w-full bg-blue-300 h-40 text-center'>1</div>
      </div>

      <div className='container mx-auto grid grid-rows-1 grid-col-1 md:grid-cols-2 gap-4'>
        <div className='w-full h-[332px] bg-[#d9d9d9]' />
        <div className='w-full h-[332px] bg-[#d9d9d9]' />
      </div> */}

      <section className='w-full mx-auto grid grid-rows-1 grid-col-1 lg:grid-cols-2 gap-4 py-16'>
        <div className='w-full h-auto'>
          <img src={image1} alt='' />
        </div>
        <div className='w-full h-auto flex flex-col items-center justify-center'>
          <h1 className='text-2xl md:text-5xl text-white font-extrabold shadow-black bg-transparent'>
            HELLOWORLD<span className='text-slate-400'>PRO</span>
          </h1>
          <h2 className='text-2xl text-white font-extralight bg-transparent'>
            Coding Custom Built Websites Line by Line.
          </h2>
        </div>
      </section>
      {/* TEST FIG TO CODE */}
      <section className=''>
        <div className=" h-[178px] justify-end text-color-slate-950 text-9xl font-medium font-['Inter'] leading-[128px]">
          HELLOWORLDPRO
        </div>
        <div className=' h-[178px] block justify-start text-color-slate-30 text-9xl font-medium '>
          HELLOWORLDPRO 2
        </div>
      </section>

      <div className='car bg-white'>
        <img
          src={car}
          className='w-full h-full p-6 rotate-90 filter drop-shadow-[65px_0_65px_rgba(0,0,0,0.85)]'
          alt='logo'
        />
      </div>

      <FixedBottomBanner />
      <footer className='md:static fixed bottom-0 left-0 w-full bg-pink-500 text-white p-4'>
        <p className='text-center'>© 2025 My Website. All rights reserved.</p>
      </footer>

      <section>
        <Lockup
          heading='Section 1'
          paragraph='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
          cta_link='/about'
          cta_text='about'
          image={image2}
          order='lg:order-first'
        />

        <Logo />
        <img src={logo} className='w-full h-full p-6 invert' alt='logo' />
      </section>

      {/* <section>
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
      </section> */}
    </>
  );
}
