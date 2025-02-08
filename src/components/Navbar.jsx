import Link from "next/link";
import logo from '@/assets/icons/logo.png'
import Image from "next/image";
import { BsBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="sticky z-10 top-0">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href={'/'} className="hidden md:flex">
           <Image className="w-20 h-20 md:w-28 md:h-28 rounded-full" src={logo} alt="logo"/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          
          <div className="flex items-center gap-6">
            <div className="">
                <p className="text-xl"><BsBagCheckFill /></p>
            </div>
            <div className="">
            <Link href={'/register'}><button className="bg-red-600 text-white px-4 py-2">Sign Up</button></Link>
          </div>
            {/* button*/}
            <Link href={'/'} className="px-6 py-2 text-red-600 duration-300 hover:bg-red-600 hover:text-white font-semibold border-2 border-red-600">Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
