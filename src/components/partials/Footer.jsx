import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import medios from "../../assets/mediosdepago.png";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black p-2 items-center relative  bottom-0 mt-32">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 px-5 pl-0 md:pl-24 lg:px-20  lg:grid-cols-4  gap-5 md:justify-around justify-items-center mx-auto md:gap-10 ">
        <div className="  text-[#747474] text-[15px] font-[550] leading-7 tracking-wide  w-3/4 md:w-full flex flex-col items-center md:block">
          <div className=" mb-10 ">
            <h1 className="text-white font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              Navegacion{" "}
            </h1>
          </div>
          <div className="flex flex-col">
        
            <Link to="/" className="hover:text-[#cacaca]" href="#">
              Inicio
            </Link>
           
         
            <Link
              to="/category/hombre"
              className="hover:text-[#cacaca]"
              href="#"
            >
              Hombres
            </Link>
          
          
            <Link
              to="/category/mujer"
              className="hover:text-[#cacaca]"
              href="#"
            >
              Mujeres
            </Link>{" "}
         
            <Link to="/category/niño" className="hover:text-[#cacaca]" href="#">
              Niños
            </Link>{" "}
        
          
            <Link to="/contacto" className="hover:text-[#cacaca]" href="#">
              Contacto
            </Link>{" "}
         
          </div>
        </div>

        <div className= "  text-[#747474] text-[15px] font-[550] leading-7 tracking-wide  w-3/4 md:w-full flex flex-col items-center md:block">
          <div className="mb-10">
            <h1 className="  text-white uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              {" "}
              MEDIOS DE PAGO
            </h1>
          </div>
         <div className="md:pr-8">
            <img src={medios} alt="" />
            </div>
        </div>

        <div className="  text-[#6d6d6d] font-[650] text-[16px] leading-7  w-3/4 md:w-full flex flex-col items-center md:block">
          <div className="flex mb-10">
            <h1 className="text-white  uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              ¿Quienes Somos?{" "}
            </h1>
          </div>
          <div className="md:pr-12 md:pl-0 px-14 text-left">
            <p>
            Somos una empresa con mas de 80 años en el mercado.Nuestro objetivo es acercarles la mejor calidad al precio mas bajo
            </p>
          </div>
        </div>

        <div className="  text-[#797878] text-[15px] font-[550] leading-6 tracking-wide w-3/4 md:w-full flex flex-col items-center md:block">
          <div className=" mb-10">
            <h1 className="text-white uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              CONTACTANOS{" "}
            </h1>
          </div>
          <div className="lg:leading-7 leading-20 mt-4 text-[15px] font-[500]  md:px-0 ">
            <div className=" hover:text-[#cacaca] space-x-3">
              {" "}
              <ion-icon name="call-outline"></ion-icon>{" "}
              <a href="#">123-456-7890</a>{" "}
            </div>
            <div className="space-x-3 hover:text-[#cacaca]">
              {" "}
              <ion-icon name="mail-outline"></ion-icon>
              <a href="#">example@email.com</a>{" "}
            </div>
            <div className="space-x-3 hover:text-[#cacaca]  ">
              <ion-icon name="location-outline"></ion-icon>
              <a href="#">Springfield,USA</a>
            </div>
          </div>
          <div className="flex justify-left mt-4 text-[#afafaf] text-center text-xl space-x-3">
            <p>
              
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-[#3b5998] transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </p>
            <p>
              {" "}
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-[#C13584] transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>{" "}
            </p>
            <p>
              {" "}
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-[#25D366] transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-0 ">
        <div className="divide-y divide-[#747474] contrast-200 mt-10 -p-5 px-5">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="flex justify-center p-1 text-[#afafaf] text-center text-sm ">
          <p> ©Copyright 2023. Todos los derechos reservados. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
