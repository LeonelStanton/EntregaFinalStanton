import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 relative top-20">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Pagina no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, la pagina que busca no ha sido encontrada
        </p>
        <div className="flex space-x-4 items-center justify-start mt-10">
          
          <Link to="/">
            <div className="bg-black w-20 h-10 px-4 py-2 text-white font-medium border-2 border-gray-400 hover:scale-105 cursor-pointer">
              <ion-icon name="arrow-back-sharp"></ion-icon>
            </div>
          </Link>
          <div className="text-sm font-medium text-stone-500">Volver al inicio</div>
        </div>
      </div>
    </main>
  );
};

export default Error404;
