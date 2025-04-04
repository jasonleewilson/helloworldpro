// import React from 'react'
import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

interface LockupProps {
  heading: string;
  paragraph: string;
  cta_link: string;
  cta_text: string;
  image: string;
  order: string;
}

function Lockup({
  heading,
  paragraph,
  cta_link,
  cta_text,
  image,
  order,
}: LockupProps) {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 text-black'>
        <div className='self-stretch flex flex-col justify-center items-center gap-4 p-24'>
          <div className="self-stretch text-left justify-start text-zinc-500 text-6xl font-bold font-['Arial'] leading-[64px]">
            <h2 className='mb-2 font-extrabold bg-gradient-to-r from-red-500 to-purple-900 text-transparent bg-clip-text inline-block'>
              {heading}
            </h2>
            <div className='flex flex-1 w-full'>
              <div className='p-1 w-full bg-zinc-50'></div>
              <div className='p-1 w-full bg-zinc-100'></div>
              <div className='p-1 w-full bg-zinc-200'></div>
              <div className='p-1 w-full bg-zinc-300'></div>
              <div className='p-1 w-full bg-zinc-400'></div>
              <div className='p-1 w-full bg-zinc-500'></div>
              <div className='p-1 w-full bg-zinc-600'></div>
              <div className='p-1 w-full bg-zinc-700'></div>
              <div className='p-1 w-full bg-zinc-800'></div>
              <div className='p-1 w-full bg-zinc-900'></div>
              <div className='p-1 w-full bg-zinc-950'></div>
            </div>
          </div>
          <div className='text-left justify-start text-black text-2xl font-normal font-sans leading-[30px]'>
            <p>{paragraph}</p>
            <Button asChild>
              <Link to={cta_link} className='btn-custom'>
                {cta_text}
              </Link>
            </Button>
          </div>
        </div>
        <div className={order}>
          <img src={image} alt='something cool' />
        </div>
      </div>
    </>
  );
}

export default Lockup;
