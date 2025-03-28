import type { MetaFunction } from "@remix-run/cloudflare";
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
    <main className='bg-gray-300 h-screen flex justify-center items-center'>
      {/* <div className='absolute h-1 w-full bg-white z-10'></div>
      <div className='z-10 absolute top-56 left-4 ml-1 bg-slate-800 text-white rounded px-4 py-2'>
        Snap Point
      </div> */}
      <div className='container p-8 absolute top-0'>
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
      </div>

      <div className='relative h-full flex flex-col gap-6 overflow-y-auto snap-mandatory snap-y'>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>

        <figure className='h-full w-screen bg-custom-darkblue snap-center shrink-0'>
          {/* <img
            className='w-full h-full object-cover rounded-md'
            src='../../assets/images/food/fruit.jpg'
            alt=''
          /> */}
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
            src='../../assets/images/food/healthy-food.jpg'
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

        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
        <div className='snap-center shrink-0'>
          <div className='shrink-0 h-48'></div>
        </div>
      </div>
    </main>
  );
}
