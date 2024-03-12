// import Image from "next/image";
import Link from "next/link";
import "../../src/components/Navbar.css";
// import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <header className='bg-white'>
      <nav>
        <div className='navbar'>
          <div className='nav-container'>
            <input className='checkbox' type='checkbox' name='' id='' />
            <div className='hamburger-lines'>
              <span className='line line1'></span>
              <span className='line line2'></span>
              <span className='line line3'></span>
            </div>
            <div className='logo'>
              <h1>
                <Link href='/'>Helloworldpro</Link>
              </h1>
            </div>
            <div className='menu-items'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <a href='#'>blogs</a>
              </li>
              <li>
                <a href='#'>portfolio</a>
              </li>
              <li>
                <a href='#'>contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
