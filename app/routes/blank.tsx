import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
// import Desktop1 from "~/components/desktop1";

// import ContactForm from "../components/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - Test" },
    {
      name: "description",
      content:
        "Welcome to HelloWorldPro! - Test - Building website line x line",
    },
  ];
};

export default function Blank() {
  return (
    <main>
      <figure>
        <div className='container mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-2'>
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
        {/* <div className='container mx-auto'>
          <div className='w-full h-[168px] py-[61px] bg-[#d9d9d9] inline-flex justify-between items-center'>
            <div className="w-[378px] h-[46px] text-center justify-start text-black text-[34px] font-normal font-['Arial']">
              <Link to={"/"}>HELLOWORLDPRO</Link>
            </div>
            <div className="w-[764px] h-[46px] text-center justify-start text-black text-[34px] font-normal font-['Arial']">
              <Link to={"/about"}>ABOUT</Link> | PORTFOLIO | CONTACT
            </div>
          </div>
        </div> */}
        <div className='container p-16'>
          <h2 className='text-white text-xs lg:text-9xl border-b-2'>
            helloworldpro
          </h2>
          <Link to={"/about"} className='text-white cursor-custom nesw-resize'>
            About
          </Link>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
          <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis
            sedLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque distinctio explicabo earum maxime odio perspiciatis sed
          </p>
        </div>
      </figure>
    </main>
  );
}
