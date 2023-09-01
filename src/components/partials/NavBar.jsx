import React, { useState } from "react";
import CartWidget from "./CartWidget";
import Logo from "../../assets/Logo.png";
import { links } from "./Mylinks";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  const [open, setOpen] = useState(false);


  return (
    <nav className="bg-black fixed z-40 w-full top-0">
      <div className="flex items-center font-medium justify-around  ">
        <div className="z-50 py-1 md:w-auto w-full flex justify-between">
          <Link to="/" >
          <img src={Logo} alt="logo" className="md:cursor-pointer h-20 md:h-16 lg:h-20 p-3" />
          </Link>
          <div
            className="text-3xl md:hidden flex items-center pr-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 md:gap-2 lg:gap-8  text-white text-base md:text-sm lg:text-base">
          <li className="hover:text-gray-300 ">
            <NavLink 
             to="/"
               
             className={(navData) =>
              navData.isActive
                ? ' py-2 px-3  rounded border-double inline-block cursor-pointer border-t-4 border-b-4 border-y-white hover:border-neutral-300'
                : 'py-2 px-3  rounded border-double  inline-block cursor-pointer  hover:border-neutral-300'
            }
            >
              INICIO
            </NavLink>
          </li>
          {links.map((link) => (
            <div className="z-20" key={link.name}>
              <div className="px-3 text-left group">
                <h1
                  className="flex justify-between items-center md:pr-0  group hover:text-gray-300 "
                 
                >
                  <NavLink to={`/category/${link.name}`}
                  className={(navData) =>
                    navData.isActive
                      ? ' py-2 px-3  rounded border-double inline-block cursor-pointer border-t-4 border-b-4 border-y-white hover:border-neutral-300'
                      : 'py-2 px-3  rounded border-double  inline-block cursor-pointer  hover:border-neutral-300'
                  }
                  >{link.name}</NavLink>

                  
                </h1>
              
              </div>
            </div>
          ))}
          <li className="hover:text-gray-300">
            <NavLink
              to="/contacto"
              className={(navData) =>
                navData.isActive
                  ? ' py-2 px-3  rounded border-double inline-block cursor-pointer border-t-4 border-b-4 border-y-white hover:border-neutral-300'
                  : 'py-2 px-3  rounded border-double  inline-block cursor-pointer  hover:border-neutral-300'
              }
            
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>
        <div className="md:flex hidden ">
        <div className="lg:flex hidden">
        
        <Search/>
        </div>
        <CartWidget />
       
        </div>
        
        {/* Responsive*/}
        <ul
          className={`
        md:hidden bg-slate-300 fixed w-1/2 top-[88px] overflow-y-auto bottom-0 border-r-2 border-slate-400 py-6 px-7 z-50
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li >
            <Link 
              to="/"
              onClick={() => setOpen(!open)}
              className="py-7 px-3 inline-block cursor-pointer hover:text-gray-500"
            >
              Inicio
            </Link>
          </li>
          {links.map((link) => (
            <div className="z-20" key={link.name}>
              <div className="px-3 text-left group">
                <h1
                  className="py-7 flex justify-between items-center md:pr-0  group hover:text-gray-500 cursor-pointer"
                  
                >
                  <NavLink to={`/category/${link.name}`} onClick={() => setOpen(!open)}>{link.name}</NavLink>

                 
                </h1>
             
              </div>
              {/* Mobile menus */}
          <div 
            
          >
          
          </div>
            </div>
          ))}
          <li>
            <Link
              to="/contacto"
              onClick={() => setOpen(!open)}
              className="py-7 px-3 inline-block cursor-pointer hover:text-gray-500"
            >
              Contacto
            </Link>
          </li>
          <li onClick={() => setOpen(!open)}>
          <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
