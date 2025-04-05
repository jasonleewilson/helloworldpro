import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

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

export default function Test() {
  return (
    <main className='h-screen flex justify-center items-center'>
      {/* <div className='absolute h-1 w-full bg-white z-10'></div>
      <div className='z-10 absolute top-56 left-4 ml-1 bg-slate-800 text-white rounded px-4 py-2'>
        Snap Point
      </div> */}
      {/* <div className='container p-8 absolute top-0'>
        <img
          src='/logo.svg'
          className='pt-8'
          alt='logo'
          width={100}
          height={500}
        />
        <h1>helloworldpro</h1>
        <p className='text-4xl py-8 text-custom-darykgrey relative bottom-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloremque distinctio explicabo earum maxime odio perspiciatis sed
          temporibus, fuga illo ipsum impedit facere unde nulla? Commodi
          mollitia unde culpa ipsa debitis repellat dolores fugit natus ad vero
          incidunt, officiis perspiciatis modi soluta porro recusandae voluptate
          in illo, ipsam, voluptatibus magni quidem animi! Officia obcaecati
          illo doloremque odio quae distinctio fugiat libero! Velit sapiente
          eaque assumenda ab. Exercitationem, eius! Deserunt sunt omnis.
        </p>
        <div className='flex pt-4'>
          <div className='text-black w-40 h-40 m-1 bg-custom-darkblue'></div>
          <div className='text-black w-40 h-40 m-1 bg-custom-lightblue'></div>
          <div className='text-black w-40 h-40 m-1 bg-custom-blue'></div>
          <div className='text-black w-40 h-40 m-1 bg-white'></div>
          <div className='text-black w-40 h-40 m-1 bg-custom-orange'></div>
        </div>
      </div> */}

      <div className='relative h-full flex flex-col gap-6 overflow-y-auto snap-mandatory snap-y'>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        {/* <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div> */}

        <figure className='h-full w-screen bg-custom-darkblue snap-center shrink-0'>
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
          <div className='container mx-auto'>
            <div className='w-full h-[168px] py-[61px] bg-[#d9d9d9] inline-flex justify-between items-center'>
              <div className="w-[378px] h-[46px] text-center justify-start text-black text-[34px] font-normal font-['Arial']">
                <Link to={"/"}>HELLOWORLDPRO</Link>
              </div>
              <div className="w-[764px] h-[46px] text-center justify-start text-black text-[34px] font-normal font-['Arial']">
                <Link to={"/about"}>ABOUT</Link> | PORTFOLIO | CONTACT
              </div>
            </div>
          </div>
          <div className='container p-16'>
            <h2 className='text-white text-xs lg:text-9xl border-b-2'>
              helloworldpro
            </h2>
            <Link
              to={"/about"}
              className='text-white cursor-custom nesw-resize'
            >
              About
            </Link>
            <p className='text-xs lg:text-4xl py-8 text-custom-blue relative bottom-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              doloremque distinctio explicabo earum maxime odio perspiciatis sed
            </p>
            <div className='flex pt-4'>
              <div className='text-black w-40 h-40 m-1 bg-custom-darkblue flying'></div>
              <div className='text-black w-40 h-40 m-1 bg-custom-lightblue nail'>
                2
              </div>
              <div className='text-black w-40 h-40 m-1 bg-custom-blue fingerprint'></div>
              <div className='text-black w-40 h-40 m-1 bg-white fingerprint'></div>
              <div className='text-black w-40 h-40 m-1 bg-custom-orange fingerprint'></div>
            </div>
          </div>
        </figure>

        <figure className='h-full w-screen snap-center bg-custom-lightblue shrink-0'>
          {/* <img
            className='w-full h-full object-cover rounded-md'
            src='../../assets/images/food/vegetables.jpg'
            alt=''
          /> */}
          <img
            src='/logo.svg'
            className='w-full h-full p-6 invert'
            alt='logo'
          />
        </figure>

        <figure className='h-full w-screen snap-center bg-custom-blue shrink-0'>
          {/* <img
            className='w-full h-full object-cover rounded-md'
            src='../../assets/images/food/steak.jpg'
            alt=''
          /> */}
        </figure>

        <figure className='h-full w-screen snap-center bg-white shrink-0'>
          <img
            className='w-full h-full object-cover rounded-md'
            src='../assets/images/food/healthy-food.jpg'
            alt=''
          />
        </figure>

        <figure className='h-full w-screen snap-center bg-custom-orange shrink-0'>
          {/* <img
            className='w-full h-full object-cover rounded-md'
            src='../../assets/images/food/exotic-fruits.jpg'
            alt=''
          /> */}
        </figure>

        <figure className='h-full w-screen snap-center shrink-0'>
          {/* <img
            className='w-full h-full object-cover rounded-md'
            src='../../assets/images/food/brain-food.jpg'
            alt=''
          /> */}
        </figure>

        {/* <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div> */}
      </div>
    </main>
  );
}
