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

  // const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header className='grid grid-cols-4 p-4'>
      <div className='col-span-1'>
        <div className='w-32'>
          <Logo />
        </div>
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

    // <header
    //   className={`h-16 z-10 fixed top-0 left-0 w-screen transition-all duration-200
    //   ${isScrolled ? "bg-white" : "bg-transparent"}`}
    // >
    //   NEW HEADER
    // </header>
  );
}
