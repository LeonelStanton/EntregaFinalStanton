import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import dinero from "../assets/billete.png";
import tarjeta from "../assets/tarjeta-de-credito.png";
import camion from "../assets/enviado.png";
import cambio from "../assets/recargar.png";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredProducts = productos.filter((producto) => producto.id == id);

  return (
    <div className="relative top-20">
      {filteredProducts.map((p) => {
        return (
          <div key={p.id} className="text-gray-600  overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-[50%] w-full lg:h-full h-64 object-cover rounded"
                  src={p.img}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-semibold mb-1">
                    {p.nombre}
                  </h1>
                  <div className="mb-4">
                    <span className="title-font font-bold text-2xl text-gray-900">
                      ${p.precio}
                    </span>
                    <p className="text-xs text-gray-700">
                      3 cuotas sin interés de ${(p.precio / 3).toFixed(2)}
                    </p>
                  </div>
                  <p className="leading-relaxed my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, incidunt quas. Hic asperiores placeat officiis, sit molestiae porro tempora autem
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-between">
                    <div className="flex ml-0 items-center ">
                      <span className="mr-3 text-sm font-light">TALLE</span>
                      <div className="relative">
                        <select className="border cursor-pointer appearance-none border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-lg pl-3 pr-20">
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute icon-detail right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <ion-icon name="chevron-down"></ion-icon>
                        </span>
                      </div>
                    </div>
                    <ItemCount />
                  </div>
                  <div className="flex">
                    <button className="flex w-full justify-center text-white font-semibold text-base bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded">
                      AGREGAR AL CARRITO
                    </button>
                  </div>
                  <div className="flex flex-col mt-8 py-1 justify-between">
                    <div className="flex items-center mb-5 ">
                      <img src={tarjeta} alt="" className=" h-14"/>
                       <div className="flex flex-col ml-5">
                      <h2 className="font-semibold text-xs text-black">
                        3 CUOTAS SIN INTERÉS
                      </h2>
                      <p className="text-xs text-gray-600">
                        Con todas las tarjetas de crédito o debito
                      </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-5">
                      <img src={camion} alt="" className="h-14"/>
                      <div className="flex flex-col ml-5">
                      <h2 className="font-semibold text-xs text-black">
                        ENVIAMOS TU COMPRA
                      </h2>
                      <p className="text-xs text-gray-600">
                        Envios a todo el pais, gratis en la zona
                      </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-5 ml-2">
                      <img src={cambio} alt="" className="h-10 mb-3 mt-2" />
                      <div className="flex flex-col ml-5">
                      <h2 className="font-semibold text-xs text-black">
                        CAMBIOS SIN CARGO
                      </h2>
                      <p className="text-xs text-gray-600">
                        Tenes 30 días para cambiar tu pedido
                      </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-5 ml-1">
                      <img src={dinero} alt="" className="mb-2 mt-1 h-10" />
                      <div className="flex flex-col ml-5">
                      <h2 className="font-semibold text-xs text-black">20% OFF</h2>
                      <p className="text-xs text-gray-600">
                        Pagando en efectivo o transferencia
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
