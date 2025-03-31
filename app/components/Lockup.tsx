// import React from 'react'

interface LockupProps {
  heading: string;
  paragraph: string;
  image: string;
  order: string;
}

function Lockup({ heading, paragraph, image, order }: LockupProps) {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 text-black'>
        <div className='self-stretch flex flex-col justify-center items-center gap-4'>
          <div className="self-stretch text-center justify-start text-black text-6xl font-bold font-['Arial'] leading-[64px]">
            <h2>{heading}</h2>
          </div>
          <div className="p-4 text-center justify-start text-black text-2xl font-medium font-['SN_Pro'] leading-[30px]">
            <p>{paragraph}</p>
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
