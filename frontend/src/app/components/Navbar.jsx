import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import MakImg from "../assets/logo.svg";

const Navbar = () => {
  const navbarImageSize = 50; // Set the desired size for the image

  return (
    <nav className="bg-inherit py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="font-bold text-xl">
            <Link legacyBehavior href='/'>
              <a>
                <Image
                  src={MakImg}
                  alt='/'
                  width={navbarImageSize}
                  height={navbarImageSize}
                  className='cursor-pointer'
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </a>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link legacyBehavior href="/">
              <a className="flex items-center">
                <AiOutlineHome className="mr-2" /> Home
              </a>
            </Link>
            <Link legacyBehavior href="/#about">
              <a className="flex items-center">
                <BsFillPersonLinesFill className="mr-2" /> About
              </a>
            </Link>
            <Link legacyBehavior href="/#projects">
              <a className="flex items-center">
                <AiOutlineInfoCircle className="mr-2" /> Projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
