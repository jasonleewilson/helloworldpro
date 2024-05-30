// import Image from "next/image";
// import Navbar from "../components/Navbar";
export const runtime = "edge";

export default function About() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
          <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
            <h1>About page</h1>
          </div>
        </div>
      </main>
    </>
  );
}
