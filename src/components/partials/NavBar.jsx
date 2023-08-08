import React, { useState } from "react";
import CartWidget from "../CartWidget";
import Logo from "../../assets/Logo.png";
import lupa from "../../assets/lupa.png";
import { links } from "./Mylinks";
import { NavLink,Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <nav className="bg-black fixed z-50 w-full ">
      <div className="flex items-center font-medium justify-around  ">
        <div className="z-50 py-1 md:w-auto w-full flex justify-between">
          <Link to="/">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-20 p-3" />
          </Link>
          <div
            className="text-3xl md:hidden flex items-center pr-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8  text-white text-base">
          <li>
            <NavLink
              to="/"
              className="py-7 px-3 inline-block cursor-pointer hover:text-gray-300"
            >
              INICIO
            </NavLink>
          </li>
          {links.map((link) => (
            <div className="z-20" key={link.name}>
              <div className="px-3 text-left group">
                <h1
                  className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-gray-300 cursor-pointer"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  <NavLink to={`/category/${link.name}`}>{link.name}</NavLink>

                  <span className="text-xl md:hidden inline">
                    <ion-icon
                      name={`${
                        heading === link.name ? "chevron-up" : "chevron-down"
                      }`}
                    ></ion-icon>
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </h1>
                {link.submenu && (
                  <div>
                    <div className=" absolute top-22 hidden group-hover:md:block hover:md:block w-full left-0">
                      <div className="bg-neutral-900 py-5 grid grid-cols-3 gap-5 w-full justify-items-center">
                        {link.sublinks.map((mysublinks) => (
                          <div key={mysublinks.Head}>
                            <h1 className="text-sm font-semibold text-white cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                              {mysublinks.Head}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <li>
            <NavLink
              to="/contacto"
              className="py-7 px-3 inline-block cursor-pointer hover:text-gray-300"
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>
        <div className="md:flex hidden ">
          <div className="mx-auto max-w-[12rem] pl-0 py-5 ">
            <form
              action=""
              className="relative mx-auto w-auto text-white bg-black"
            >
              <input
                type="search"
                className="peer cursor-pointer relative z-10 h-10 w-10 bg-transparent pl-14 outline-none focus:w-full focus:cursor-text focus:border-b-2 focus:border-white focus:pl-[70px] focus:pr-4"
              />
              <div className="absolute flex justify-center active-icon inset-y-0 my-[6px] h-[1.9rem] w-[3.8rem]  border-r-2 border-b-0  border-transparent px-3.5 peer-focus:border-white ">
                <img src={lupa} alt="" />
              </div>
            </form>
          </div>
          <CartWidget />
        </div>
        {/* Responsive*/}
        <ul
          className={`
        md:hidden bg-slate-600 fixed w-full top-20 overflow-y-auto bottom-0 py-6 pl-4 z-50
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <a
              to="/"
              className="py-7 px-3 inline-block cursor-pointer hover:text-gray-300"
            >
              Inicio
            </a>
          </li>
          {links.map((link) => (
            <div className="z-20" key={link.name}>
              <div className="px-3 text-left group">
                <h1
                  className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-gray-300 cursor-pointer"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  <NavLink to={`/category/${link.name}`}>{link.name}</NavLink>

                  <span className="text-xl md:hidden inline">
                    <ion-icon
                      name={`${
                        heading === link.name ? "chevron-up" : "chevron-down"
                      }`}
                    ></ion-icon>
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </h1>
                {link.submenu && (
                  <div>
                    <div className=" absolute top-22 hidden group-hover:md:block hover:md:block w-full left-0 ">
                      <div className="bg-neutral-900 py-5 grid grid-cols-3 gap-5 w-full justify-items-center">
                        {link.sublinks.map((mysublinks) => (
                          <div key={mysublinks.Head}>
                            <h1 className="text-sm font-semibold text-white cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                              {mysublinks.Head}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile menus */}
          <div 
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `} 
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
             
              <div key={slinks.Head}>
                <div >
                  <h1 
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center cursor-pointer"
                  >
                    {slinks.Head}
                     
                   
                    
                  </h1>

                  
                 
                </div>
              </div>
              
            ))}
          </div>
            </div>
          ))}
          <li>
            <a
              to="/contacto"
              className="py-7 px-3 inline-block cursor-pointer hover:text-gray-300"
            >
              Contacto
            </a>
          </li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;