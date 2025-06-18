function Hero() {
  return (
    <>
      <div className='container h-screen mx-auto bg-color-base-white overflow-hidden'>
        <div className='w-[693px] left-[410px] top-[109px] absolute inline-flex flex-col justify-start items-center gap-7'>
          <div className='self-stretch flex flex-col justify-start items-center gap-4'>
            <div className="self-stretch text-center justify-start text-black text-[63px] font-bold font-['Arial'] leading-[64px]">
              Find Your Tribe,
              <br />
              Build Your Network.
            </div>
            <div className="w-[572px] text-center justify-start text-black text-2xl font-medium font-['SN_Pro'] leading-[30px]">
              Connect with like-minded students for fun, friendships, and future
              opportunities.
            </div>
          </div>
          <div className='size- inline-flex justify-center items-center gap-4'>
            <div className='h-[45px] px-[30px] bg-color-slate-900 rounded-[50px] flex justify-center items-center gap-2.5'>
              <div className="text-center justify-center text-color-base-white text-base font-medium font-['SN_Pro']">
                Join for Free
              </div>
            </div>
            <div className='h-[45px] px-[30px] bg-color-base-white rounded-[50px] outline outline-[0.50px] outline-offset-[-0.50px] outline-color-slate-300 flex justify-center items-center gap-2.5'>
              <img
                className='size-[26px] rounded-full'
                alt='alt'
                src='https://placehold.co/26x26'
              />
              <div className="text-center justify-center text-black text-base font-medium font-['SN_Pro']">
                Explore Communities
              </div>
            </div>
          </div>
          <img
            className='h-1/2 w-auto mx-auto  relative bottom-0'
            alt='alt'
            src='https://img.freepik.com/free-photo/3d-portrait-people_23-2150794021.jpg'
          />
        </div>
        <div className='w-[1512px] px-12 py-3 left-0 top-[4px] absolute inline-flex justify-between items-center'>
          <div className='w-[101px] h-[21px] relative overflow-hidden'>
            <div className='w-5 h-[19.89px] left-0 top-0 absolute bg-color-slate-900'></div>
            <div className='w-[3.16px] h-[14.69px] left-[97.62px] top-[2.26px] absolute bg-color-slate-900'></div>
            <div className='w-[12.15px] h-[15.04px] left-[83.52px] top-[2.23px] absolute bg-color-slate-900'></div>
            <div className='w-[11.05px] h-[11.46px] left-[66.81px] top-[5.73px] absolute bg-color-slate-900'></div>
            <div className='w-[9.95px] h-[11.21px] left-[55.75px] top-[5.73px] absolute bg-color-slate-900'></div>
            <div className='w-[11.32px] h-[14.07px] left-[43.45px] top-[5.98px] absolute bg-color-slate-900'></div>
            <div className='w-[15.94px] h-[14.69px] left-[26.37px] top-[2.26px] absolute bg-color-slate-900'></div>
          </div>
          <div className='size- flex justify-center items-center gap-5'>
            <div className='size- flex justify-center items-center gap-0.5'>
              <div className="justify-start text-black text-sm font-semibold font-['SN_Pro']">
                Features
              </div>
            </div>
            <div className='size- flex justify-center items-center gap-0.5'>
              <div className="justify-start text-black text-sm font-semibold font-['SN_Pro']">
                Communities
              </div>
            </div>
            <div className="justify-start text-black text-sm font-semibold font-['SN_Pro']">
              Events
            </div>
            <div className='size- flex justify-center items-center gap-0.5'>
              <div className="justify-start text-black text-sm font-semibold font-['SN_Pro']">
                About Us
              </div>
            </div>
            <div className="justify-start text-black text-sm font-semibold font-['SN_Pro']">
              Login
            </div>
            <div className='size- px-5 py-2 bg-color-slate-900 rounded-[48px] inline-flex flex-col justify-start items-start gap-2'>
              <div className="justify-start text-color-base-white text-sm font-semibold font-['SN_Pro']">
                Join for Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
