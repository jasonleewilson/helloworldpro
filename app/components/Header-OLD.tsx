// import React from "react";
import { Link } from "@remix-run/react";
import Logo from "./Logo";

function Header() {
  return (
    <div className='container-fluid mx-auto grid grid-cols-3 pr-10 bg-blue-500'>
      <div className='col-span-1 logo'>
        <h1 className='sr-only'>HELLOWORLD</h1>
        <Logo />
      </div>
      <nav className='col-span-2 place-items-center text-white'>
        <ul className='flex items-center justify-end h-full gap-4'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/test"}>Test</Link>
          </li>
          <li>
            <Link to={"/test1"}>Test1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
