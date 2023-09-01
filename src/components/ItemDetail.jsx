import { React, useState } from "react";
import ItemCount from "./ItemCount";
import dinero from "../assets/billete.png";
import tarjeta from "../assets/tarjeta-de-credito.png";
import camion from "../assets/enviado.png";
import cambio from "../assets/recargar.png";
import Modals from "./Modals";
import InnerImageZoom from "react-inner-image-zoom";
import { useCartContext } from "./context/CartContext";

const ItemDetail = ({ producto }) => {
  const [talle, setTalle] = useState("");
  const handleChangeTalle = (event) => {
    setTalle(event.target.value);
  };
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { addItem } = useCartContext();
  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);
    const item = { ...producto };
    const nuevaId = `${item.id}${talle}`;
    item.id = nuevaId;

    addItem(item, cantidad, talle);
  };

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        key={producto.id}
        className="flex items-center justify-center mt-44 mb-12"
      >
        <div className="flex lg:flex-row flex-col px-10  text-gray-600 items-center justify-center ">
          <div className="w-auto h-auto rounded ">
            <InnerImageZoom
              src={producto.img}
              zoomSrc={producto.img2}
              zoomType="hover"
              zoomPreload={true}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-7 lg:py-10 mt-6 lg:mt-0 flex flex-col  sm:px-10 md:px-20 lg:px-16 ">
            <h1 className="text-gray-900 text-3xl title-font font-semibold mb-1">
              {producto.nombre}
            </h1>
            <div className="mb-4">
              <span className="title-font font-bold text-2xl text-gray-900">
                ${producto.precio}
              </span>
              <p className="text-xs text-gray-700">
                3 cuotas sin interés de ${(producto.precio / 3).toFixed(2)}
              </p>
            </div>
            <p className="leading-relaxed my-6">{producto.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-between">
              <div className="flex ml-0 items-center ">
                <span className="mr-3 text-sm font-light">TALLE</span>
                <div className="relative">
                  {producto.subcategory == "remeras" &&
                  producto.category == "Niño" ? (
                    <select
                      onChange={handleChangeTalle}
                      className="border cursor-pointer appearance-none border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-lg pl-3 pr-12"
                    >
                      <option></option>
                      <option>4</option>
                      <option>6</option>
                      <option>8</option>
                      <option>10</option>
                      <option>12</option>
                    </select>
                  ) : producto.subcategory == "remeras" ||
                    producto.subcategory == "buzos" ||
                    producto.subcategory == "camisas" ||
                    producto.subcategory == "camperas" ? (
                    <select
                      onChange={handleChangeTalle}
                      className="border cursor-pointer appearance-none border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-lg pl-3 pr-12"
                    >
                      <option></option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                  ) : (
                    <select
                      onChange={handleChangeTalle}
                      className="border cursor-pointer appearance-none border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-lg pl-3 pr-12"
                    >
                      <option></option>
                      <option>36</option>
                      <option>38</option>
                      <option>40</option>
                      <option>42</option>
                      <option>44</option>
                    </select>
                  )}

                  <span className="absolute icon-detail right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex ">
              <ItemCount
                initial={1}
                talle={talle}
                onAdd={handleOnAdd}
                openModal={setModalOpen}
              />
            </div>
            <div className="flex flex-col mt-8 py-1 justify-between">
              <div className="flex items-center mb-5 ">
                <img src={tarjeta} alt="" className=" h-14" />
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
                <img src={camion} alt="" className="h-14" />
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

        <Modals isVisible={modalOpen} producto={producto} />
      </div>
    </>
  );
};

export default ItemDetail;
