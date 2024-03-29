import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { menu, logo, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);
  const Scroll = () => {
    if (window.scrollY >= 60) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", Scroll);
  return (
    <nav
      className={`${
        styles.paddingX
      }   z-20 fixed duration-500 py-5 top-0 flex w-full items-center ${
        fix ? "bg-[#0b1127]" : null
      }`}
    >
      <div className="w-full flex justify-between max-w-7xl items-center mx-auto">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center justify-center gap-1"
        >
          <div className="w-14 h-14  flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className=" object-cover w-full h-full"
            />
          </div>
          <p className="hover:text-secondary transition-colors duration-150 ease-in text-white uppercase cursor-pointer font-bold text-[34px] font-mono italic">
            bhishek
          </p>
        </Link>
        <ul className="list-none text-white hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={` hover:text-white transition-colors duration-150 ease-in font-medium text-[18px] cursor-pointer ${
                  active === link.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
          >
            {" "}
            <ul className="list-none text-white flex flex-col justify-start gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={` hover:text-white font-medium text-[18px] cursor-pointer ${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
