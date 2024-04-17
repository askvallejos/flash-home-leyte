import { useState } from "react";
import flashLogo from "../../public/images/flashLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { Fade, Bounce } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#ffec34] font-prompt text-sm text-black">
        <div className="flex justify-between items-center h-16 mx-auto p-4 relative z-50">
          <Bounce>
            <img src={flashLogo} className="h-12 inline" />
          </Bounce>
          <Fade cascade damping={0.5} direction="right">
            <ul className="hidden md:flex">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="m-4 border border-transparent border-x-8 hover:overline cursor-pointer">
                  Home
                </li>
              </Link>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="m-4 border border-transparent border-x-8 hover:overline cursor-pointer">
                  Gallery
                </li>
              </Link>
              <a
                href="https://maps.app.goo.gl/MSGSXrasZeBeBLV88"
                target="_blank"
              >
                <li className="m-4 border border-transparent border-x-8 hover:overline cursor-pointer">
                  Location
                </li>
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="m-4 border border-transparent border-l-8 hover:overline cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </Fade>
          <div onClick={handleNav} className="block md:hidden text-black">
            {nav ? (
              <AiOutlineClose size={24} className="cursor-pointer" />
            ) : (
              <AiOutlineMenu size={24} className="cursor-pointer" />
            )}
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed top-16 w-full h-full bg-[#f8f8f7] ease-in-out duration-500 text-black md:hidden z-40"
              : "fixed top-[-100%] w-full h-full ease-in-out duration-500 z-0"
          }
        >
          <Fade cascade damping={0.5} direction="left">
            <ul className="p-4 text-center">
              <li className="p-4 flex items-center justify-center border border-transparent hover:bg-black hover:border rounded hover:text-white cursor-pointer">
                <TiHome className="mr-3" /> Home
              </li>
              <a
                href="https://maps.app.goo.gl/MSGSXrasZeBeBLV88"
                target="_blank"
              >
                <li className="p-4 flex items-center justify-center border border-transparent hover:bg-black hover:border rounded hover:text-white cursor-pointer">
                  <FaMapLocationDot className="mr-3" /> Location
                </li>
              </a>
              <li className="p-4 flex items-center justify-center border border-transparent hover:bg-black hover:border rounded hover:text-white cursor-pointer">
                <FaPhone className="mr-3" /> Contact
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Navbar;
