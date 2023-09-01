import React from "react";
import catHombre from "../../assets/categoriaHombre.webp";
import catMujer from "../../assets/categoriaMujer.webp";
import catNiños from "../../assets/categoriaNiños.webp";
import { Link } from "react-router-dom";

const Seccions = () => {
  return (
    <>
      <div className="gap-10 md:flex-row md:justify-around flex mt-20 flex-col justify-center items-center w-auto h-auto md:mx-10 ">
        <div className="md:w-2/5 w-3/4 h-fit relative flex flex-col items-center justify-center hover:opacity-80  cursor-pointer shadow-lg shadow-slate-700 overflow-hidden">
          <img
            src={catHombre}
            alt=""
            className="h-auto w-full object-cover  transition duration-500 bg-center bg-cover ease-out hover:scale-105 mix-blend-overlay"
          />
          <div className="absolute">
            <Link
              to="/category/Hombre"
              className="relative mt-4 text-xs font-300 tracking-[.30em] bg-transparent hover:bg-neutral-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            >
              VER CATEGORIA
            </Link>
          </div>
        </div>
        <div className="md:w-2/5  w-3/4 h-fit  flex flex-col items-center justify-center  bg-center bg-no-repeat bg-cover object-cover relative hover:opacity-80 cursor-pointer shadow-lg shadow-slate-700 overflow-hidden">
          <img
            src={catMujer}
            alt=""
            className="w-full h-full object-cover  transition duration-500 ease-out hover:scale-105 mix-blend-overlay"
          />
          <div className="absolute">
            <Link
              to="/category/Mujer"
              className="relative mt-4  text-xs font-300 tracking-[.30em] bg-transparent hover:bg-neutral-950 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            >
              VER CATEGORIA
            </Link>
          </div>
        </div>
        <div className="md:w-2/5  w-3/4 h-fit  flex flex-col items-center justify-center  bg-center bg-no-repeat bg-cover object-cover relative hover:opacity-80 cursor-pointer shadow-lg shadow-slate-700 overflow-hidden">
          <img
            src={catNiños}
            alt=""
            className="w-full h-full object-cover transition duration-500 ease-out hover:scale-105 mix-blend-overlay"
          />
          <div className="absolute">
            <Link
              to="/category/Niño"
              className="relative mt-4 text-xs font-300 tracking-[.30em] bg-transparent hover:bg-neutral-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
            >
              VER CATEGORIA
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seccions;
