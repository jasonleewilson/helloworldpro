// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkedljo");
  if (state.succeeded) {
    return <p className='text-black'>Thanks for your submission!</p>;
  }
  return (
    <>
      {/* <form onSubmit={handleSubmit} className='text-black'>
        <label htmlFor='email'>Email Address</label>
        <input id='email' type='email' name='email' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <textarea id='message' name='message' title='message' />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button type='submit' disabled={state.submitting}>
          Submit
        </button>
      </form> */}
      <form
        onSubmit={handleSubmit}
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
      >
        <div>
          <p className='hidden'>
            <label>
              Don&apos;t fill this out if you&apos;re human:{" "}
              <input name='bot-field' />
            </label>
          </p>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <div className='relative'>
            <input
              id='email'
              type='email'
              name='email'
              className='w-full bg-white text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs'
              aria-label='email'
              placeholder='Enter email'
              required
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
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
              id='message'
              name='message'
              title='message'
              className='w-full rounded-lg bg-white text-black border-gray-200 p-4 pe-12 text-sm shadow-xs form-control'
              aria-label='message'
              placeholder='Enter Message'
              required
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500'>
            Don&apos;t worry we will not spam you :)
          </p>
          <button
            type='submit'
            disabled={state.submitting}
            className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
            value='Say Hi'
          >
            Say Hi
          </button>
        </div>
      </form>
    </>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
