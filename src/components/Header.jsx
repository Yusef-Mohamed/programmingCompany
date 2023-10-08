import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaEarthAmericas } from "react-icons/fa6";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed py-4  top-0 w-full text-[white]  bg-dark z-20">
      <div className="container flex items-center justify-between">
        <nav className="flex gap-4 items-center">
          <img
            src="https://webstdy.com/web/new-logos/logo.svg"
            className="w-[160px]"
            alt=""
          />
          <ul className="hidden lg:flex gap-4">
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
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                أعمالنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
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
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-sky" : "")}
              >
                أعمالنا
              </NavLink>
            </li>
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
