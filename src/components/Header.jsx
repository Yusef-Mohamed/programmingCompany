import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaEarthAmericas } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import { services } from "../servises";
import logo from "../assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed py-4  top-0 w-full text-[white]  bg-dark z-20">
      <div className="container flex items-center justify-between">
        <nav className="flex gap-4 items-center">
          <Link to={"/"}>
            <img src={logo} className="w-[160px]" alt="" />
          </Link>
          <ul className="hidden lg:flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-sky" : "hover:text-sky transition-all"
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="relative">
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className={
                  "hover:text-sky transition-all flex flex-row items-center gap-2"
                }
              >
                خدماتنا
                <BiChevronDown />
              </button>
              {servicesOpen && (
                <ul className="absolute shadow-lg rounded-xl flex flex-col gap-2 bg-[white] text-[black] font-semibold p-4 whitespace-nowrap">
                  {services.map((item) => (
                    <li key={item.id} onClick={() => setServicesOpen(false)}>
                      <NavLink
                        to={`/services/${item.id}`}
                        className={({ isActive }) =>
                          isActive
                            ? "text-sky"
                            : "hover:text-sky transition-all"
                        }
                      >
                        {item.heading}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-sky" : "hover:text-sky transition-all"
                }
              >
                من نحن
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                أعمالنا
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-sky" : "hover:text-sky transition-all"
                }
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="gap-4 items-center hidden lg:flex">
          <Link
            className="blueGradient block w-fit mx-auto px-4 py-[1px] rounded-md"
            to={"/"}
          >
            ابدأ المشروع
          </Link>
        </div>
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className={`bg-[#041c34e6] ${
            isOpen ? "w-full" : "w-0"
          } h-full overflow-hidden duration-500 fixed top-0 right-0 transition-all flex justify-center items-center`}
        >
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="absolute top-[10%] text-[white] text-4xl right-[10%]"
          >
            <AiOutlineClose />
          </button>
          <ul className="flex flex-col justify-center items-center gap-4 text-2xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                من نحن
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                أعمالنا
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="text-2xl lg:hidden" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
