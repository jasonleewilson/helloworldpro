// import Logo from "../../public/logo.svg";
import { X, Heart } from "lucide-react";
import {
  SiDribbble,
  SiBehance,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

import Logo from "./Logo";
import { Link } from "@remix-run/react";

function Footer() {
  return (
    <>
      <footer className='py-8 mt-1 bg-slate-800 dark:bg-gray-900 bg-[url(/assets/images/bg-cement.jpg)]'>
        <div className='container'>
          <div className='grid md:grid-cols-12 justify-items-end'>
            <div className='md:col-span-3'>
              <Link to={"/about"} className='logo-footer'>
                {/* <img
                  src={Logo}
                  alt='logo'
                  width={150}
                  height={50}
                  className=' md:ms-0 mx-auto invert p-8'
                /> */}
                <Logo />
                <div className='w-full p-14'>
                  <div className='text-black w-40 h-10 bg-custom-red'></div>
                  <div className='text-black w-40 h-10 bg-custom-darkred'></div>
                  <div className='text-black w-40 h-10 bg-custom-lightgrey'></div>
                  <div className='text-black w-40 h-10 bg-custom-mediumgrey'></div>
                  <div className='text-black w-40 h-10 bg-custom-darykgrey'></div>
                </div>
              </Link>
            </div>

            <div className='md:col-span-5 md:mt-0 mt-8'>
              <div className='text-center'>
                <p className='text-slate-800 flex'>
                  © 2025 helloworldpro. Design with{" "}
                  <Heart size={32} className='mx-2 text-red-500 fill-red-500' />{" "}
                  by{" "}
                  <a
                    href='https://jasonleewilson.com/'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-reset'
                  >
                    jasonleewilson
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className='md:col-span-4 md:mt-0 mt-8'>
              <ul className='list-none foot-icon md:ltr:text-right md:rtl:text-left text-center'>
                <li className='inline'>
                  <a
                    href='https://dribbble.com/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    title='Dribble - jasonleewilson'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-slate-800 hover:text-white'
                  >
                    <SiDribbble />
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://www.behance.net/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    title='Behance - jasonleewilson'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-slate-800 hover:text-white'
                  >
                    <SiBehance />
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://www.instagram.com/jasonleewilson_/'
                    target='_blank'
                    rel='noreferrer noopener'
                    title='Instagram - jasonleewilson_'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-slate-800 hover:text-white'
                  >
                    <SiInstagram />
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://twitter.com/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    title='x - jasonleewilson'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-slate-800 hover:text-white'
                  >
                    <X size={32} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
