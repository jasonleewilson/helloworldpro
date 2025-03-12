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
