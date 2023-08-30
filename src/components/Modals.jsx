import React from "react";
import { Link } from "react-router-dom";

function Modals({ isVisible, producto }) {
  if (!isVisible) return null;

  return (
    <>
      
          <div
            key={producto.id}
            className="fixed z-50 h-screen bg-gray-400 bg-opacity-50 backdrop-blur-sm inset-0 flex justify-center items-center"
          >
            <div className="md:w-2/5 w-4/5 h-fit rounded-lg bg-white shadow-md flex flex-col p-4">
              <h1 className="text-base font-bold m-auto">
                AGREGASTE UN PRODUCTO A TU BOLSA DE COMPRAS
              </h1>
              <div className="flex justify-center flex-col align-center text-center mt-4 border-b-2 border-gray-100 p-4">
                <img src={producto.img} alt="" className="w-44 py-3 m-auto" />
                <h2 className="font-normal ">{producto.nombre}</h2>
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <Link
                  to="/cart"
                  className="bg-black w-4/5 text-center text-base font-semibold text-white p-3 cursor-pointer mb-3 hover:bg-neutral-700"
                >
                  FINALIZAR COMPRA
                </Link>

                <Link
                  to="/"
                  className="text-red-600 hover:underline underline-offset-4 decoration-2 decoration-red"
                >
                  SEGUIR COMPRANDO
                </Link>
              </div>
            </div>
          </div>
        
      
    </>
  );
}

export default Modals;
