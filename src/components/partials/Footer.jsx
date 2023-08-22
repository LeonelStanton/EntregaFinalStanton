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
    <div className="bg-black p-2 items-center relative bottom-0 mt-32">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:px-28 justify-around gap-5">
      <div className="md:flex flex-col justify-between mx-auto ">
          <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
            <div className="flex mb-10">
              <h1 className="text-white font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                Navegacion{" "}
              </h1>
            </div>
            <p className="">
              {" "}
              <Link to="/" className="hover:text-[#cacaca]" href="#">
                Inicio
              </Link>{" "}
            </p>
            <p className="">
              {" "}
              <Link
                to="/category/hombre"
                className="hover:text-[#cacaca]"
                href="#"
              >
                Hombres
              </Link>{" "}
            </p>
            <p className="">
              {" "}
              <Link
                to="/category/mujer"
                className="hover:text-[#cacaca]"
                href="#"
              >
                Mujeres
              </Link>{" "}
            </p>
            <p className="">
              {" "}
              <Link
                to="/category/niño"
                className="hover:text-[#cacaca]"
                href="#"
              >
                Niños
              </Link>{" "}
            </p>
            <p className="">
              {" "}
              <Link
                to="/contacto"
                className="hover:text-[#cacaca]"
                href="#"
              >
                Contacto
              </Link>{" "}
            </p>
          </div>
          
        </div>
        <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
          <div className="mb-10">
            <h1 className="text-white uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              {" "}
              MEDIOS DE PAGO 
            </h1>
          </div>
          <div className="pr-8">
          <img src={medios} alt="" />
          </div>
        </div>
        <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7 ">
          <div className="flex mb-10">
            <h1 className="text-white font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              ¿Quienes Somos?{" "}
            </h1>
          </div>
          <div className="pr-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              mollitia rem rerum laborum provident. Suscipit, consequuntur id
              ullam sint eum.
            </p>
          </div>
        </div>
        <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide ">
          <div className="flex mb-10">
            <h1 className="text-white uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
              CONTACTANOS{" "}
            </h1>
          </div>
          <div className="leading-7 mt-4 text-[15px] font-[500]">
            <div className="space-x-3 hover:text-[#cacaca]">
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
              <a href="#">Springfield,Massachusetts</a>
            </div>
          </div>
          <div className="flex justify-left mt-4 text-[#afafaf] text-center text-xl space-x-3">
            <p>
              {" "}
              <a
                href="#"
                className="w-10 h-10 bg-[#474747] hover:text-[#3b5998] transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>{" "}
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
