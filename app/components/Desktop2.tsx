// import burger from "~/assets/images/burger.jpg";

const Desktop2 = () => (
  <>
    <div className='h-96 my-8 flex content-end sm:flex-wrap md:flex-nowrap items-start gap-0 px-8 mx-8 bg-white bg-[url("assets/images/burger1.png")] bg-no-repeat bg-size-[auto_700px] bg-position-[center_right_-10rem] rounded-2xl'>
      <div className='flex w-1/3 p-8 h-full items-center justify-center'>
        <div className='text-left'>
          <h1 className='py-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-5xl font-extrabold text-transparent'>
            Burger
          </h1>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id
            nibh ultricies vehicula ut id elit.
          </p>
          <a href='https:/helloworldpro.com' className='underline'>
            Read More
          </a>
        </div>
      </div>
    </div>

    <div className='xs:h-auto h-96 my-8 flex flex-wrap gap-0 mx-8 bg-white rounded-2xl'>
      <div className='flex order-2 md:order-1 xs:w-full md:w-1/3 p-8 h-full items-center justify-center bg-white rounded-b-2xl  md:rounded-2xl'>
        <div className='text-left'>
          <h1 className='py-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-5xl font-extrabold text-transparent'>
            Burger
          </h1>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id
            nibh ultricies vehicula ut id elit.
          </p>
          <a href='https:/helloworldpro.com' className='underline'>
            Read More
          </a>
        </div>
      </div>
      <div className='h-96 order-1 md:order-2 w-full md:w-2/3 bg-[url("assets/images/burger1.png")] bg-no-repeat bg-size-[auto_700px] bg-position-[center_center_-10rem] md:bg-position-[center_right_-10rem] rounded-none  md:rounded-2xl'></div>
    </div>
  </>
);

export default Desktop2;
