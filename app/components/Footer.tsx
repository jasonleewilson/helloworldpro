// import Logo from "../../public/logo.svg";
import Logo from "./Logo";
import { Link } from "@remix-run/react";

function Footer() {
  return (
    <>
      <footer className='py-8 bg-slate-800 dark:bg-gray-900'>
        <div className='container'>
          <div className='grid md:grid-cols-12 items-center'>
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
              </Link>
            </div>

            <div className='md:col-span-5 md:mt-0 mt-8'>
              <div className='text-center'>
                <p className='text-gray-400'>
                  © 2025 helloworldpro. Design with{" "}
                  <i className='mdi mdi-heart text-orange-700'></i> by{" "}
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
              <ul className='list-none foot-icon ltr:md:text-right rtl:md:text-left text-center'>
                <li className='inline'>
                  <a
                    href='https://dribbble.com/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white'
                  >
                    <i
                      className='uil uil-dribbble align-middle'
                      title='dribbble'
                    ></i>
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://www.behance.net/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white'
                  >
                    <i
                      className='uil uil-behance align-middle'
                      title='Behance'
                    ></i>
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='http://linkedin.com/company/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white'
                  >
                    <i
                      className='uil uil-linkedin align-middle'
                      title='Linkedin'
                    ></i>
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://www.facebook.com/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white'
                  >
                    <i
                      className='uil uil-facebook-f align-middle'
                      title='facebook'
                    ></i>
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://www.instagram.com/jasonleewilson_/'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white'
                  >
                    <i
                      className='uil uil-instagram align-middle'
                      title='instagram'
                    ></i>
                  </a>
                </li>
                <li className='inline'>
                  <a
                    href='https://twitter.com/jasonleewilson'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='btn w-1/5 h-1/5 btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white'
                  >
                    <i
                      className='uil uil-twitter align-middle'
                      title='twitter'
                    ></i>
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
