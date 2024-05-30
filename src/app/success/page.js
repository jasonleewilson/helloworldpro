import Image from "next/image";
import hero from "../../assets//images/hero.jpg";
import Link from "next/link";
// import Link from "next/link";
export const runtime = "edge";

export default function Success() {
  return (
    <>
      <main>
        {/* Plugins:
    - @tailwindcss/forms */}

        <section className='relative flex flex-wrap lg:h-screen lg:items-center'>
          <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
            <div className='mx-auto max-w-lg text-center'>
              <h1 className='text-gray-700 text-2xl font-bold sm:text-3xl'>
                Helloworldpro.com
              </h1>

              <p className='mt-4 text-gray-700'>
                Success. Thank you for sending us a message.
              </p>
              <Link href='/' className='underline'>
                Go back to homepage
              </Link>
            </div>
          </div>

          <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
            <Image
              src={hero}
              alt='Helloworldpro hero image'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        </section>
      </main>
    </>
  );
}
