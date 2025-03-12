import type { MetaFunction } from "@remix-run/cloudflare";
import hero from "../assets/images/her-opt.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - Building website line x line" },
    {
      name: "description",
      content: "Welcome to HelloWorldPro! - Building website line x line",
    },
  ];
};

export default function Index() {
  return (
    <main className='bg-gray-50'>
      {/* Plugins:
    - @tailwindcss/forms */}

      <section className='relative flex flex-wrap h-screen items-center'>
        <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
          <div className='mx-auto max-w-lg text-center'>
            <h1 className='text-gray-700 text-2xl font-bold sm:text-3xl'>
              Helloworldpro.com
            </h1>
          </div>

          {/* <form
            name='contact'
            method='POST'
            action='/success'
            className='mx-auto mb-0 mt-8 max-w-md space-y-4'
            netlify-honeypot='bot-field'
            data-netlify='true'
          >
            <div>
              <p className='hidden'>
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name='bot-field' />
                </label>
              </p>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <div className='relative'>
                <input
                  type='email'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  name='email'
                  aria-label='email'
                  placeholder='Enter email'
                  required
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor='message' className='sr-only'>
                Messgage
              </label>

              <div className='relative'>
                <textarea
                  type='textarea'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm form-control'
                  name='message'
                  aria-label='message'
                  placeholder='Enter Message'
                  required
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-sm text-gray-500'>
                  Don't worry we will not spam you :)
                </p>

              <button
                type='submit'
                className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
                value='Submit Message'
              >
                Say Hi
              </button>
            </div>
          </form> */}
        </div>

        <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
          <img
            alt=''
            src={hero}
            className='absolute inset-0 h-full w-full object-cover'
          />
          {/* ALTERNATE IMAGE - https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 */}
        </div>
      </section>
    </main>
  );
}
