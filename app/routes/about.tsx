import type { MetaFunction } from "@remix-run/cloudflare";
// import Hero from "~/components/Hero";
// import { Link } from "@remix-run/react";
// import logo from "~/assets/images/logo.svg";
import image1 from "~/assets/images/bg-left.png";
import image2 from "~/assets/images/hero.webp";
import car from "~/assets/images/car.png";
import Lockup from "~/components/Lockup";
import Logo from "~/components/Logo";
import BackToTop from "~/components/BackToTop";
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
      <section className='animate-fade-in-scale w-full mx-auto grid grid-rows-1 grid-col-1 lg:grid-cols-2 gap-4 py-16'>
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

      <div className='car'>
        <img
          src={car}
          className='w-full h-full p-6 rotate-90 filter drop-shadow-[65px_0_65px_rgba(0,0,0,0.85)]'
          alt='logo'
        />
      </div>

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
        {/* <img src={logo} className='w-full h-full p-6 invert' alt='logo' /> */}
      </section>
      <BackToTop />
    </>
  );
}
