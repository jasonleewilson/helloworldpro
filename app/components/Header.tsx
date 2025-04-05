import { Link, useLocation } from "@remix-run/react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClass = (path: string) =>
    `hover:underline ${
      currentPath === path ? "underline font-semibold text-white" : "text-white"
    }`;

  return (
    <header className='grid grid-cols-4 p-4 bg-blue-600'>
      <div className='col-span-1'>
        <Logo />
      </div>
      <div className='col-span-1'>
        <SearchBar />
      </div>
      <div className='col-span-2'>
        <nav className='flex gap-4 place-items-center items-center justify-end'>
          <Link to='/' className={linkClass("/")}>
            Home
          </Link>
          <Link to='/about' className={linkClass("/about")}>
            About
          </Link>
          <Link to='/test' className={linkClass("/test")}>
            Test
          </Link>
          <Link to='/test1' className={linkClass("/test1")}>
            Test1
          </Link>
        </nav>
      </div>
    </header>
  );
}
