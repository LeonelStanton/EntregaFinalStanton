import React, { useEffect, useState } from "react";
import { useCartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

import RingLoader from "react-spinners/RingLoader";

const Cart = () => {
  const { cart, addItem, removeProduct, totalProducts, totalPrice,removeItem, clearCart } =
    useCartContext();
   const [loading,setLoading]=useState(false)
    useEffect(()=>{
    setLoading(true)
   setTimeout(()=>{
      setLoading(false)
      
    },1000)
   },[] )
  return (

    loading ?  
    (<div className=" relative top-24 h-screen w-full flex items-center justify-center bottom-32">
    <RingLoader

    color={"#9ca3af"}
    loading={loading}
    
    size={100}
    
  /> 
  </div>): (

    <div className="relative top-20 h-auto">
        
      {totalProducts() === 0 ? (
        <div className="text-base mt-10 text-gray-600 flex flex-col items-center relative h-screen justify-center">
          <h1 className="text-black text-2xl font-base ">Su carrito está vacio</h1>
          
          <Link to="/" className="mt-4 bg-black text-white py-6 px-20 rounded-md font-medium cursor-pointer flex">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left leading-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <p className="leading-4 text-lg ml-2 ">Seguir comprando</p>
            
          </Link>
          
        </div>
      ) : (
        <div className="container relative h-full mx-auto mt-10 mb-64">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Mi carrito</h1>
                
              </div>
              <div className="flex mt-5 mb-5 py-10 border-b  ">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-5/12">
                  Producto
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/12 ">
                  Cantidad
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/12">
                  Precio
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/12 ">
                  Subtotal
                </h3>
                <h3 className="w-1/12"></h3>
              </div>
              {cart.map((cartp) => {
                return (
                  <div key={cartp.id} className="flex items-center hover:bg-gray-100 border-b -mx-1 px-1 py-5">
                    <div className="flex w-5/12">
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={cartp.img}
                          alt={cartp.nombre}
                        />
                      </div>
                      <div className="flex flex-col justify-center ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          {cartp.nombre}
                        </span>
                        <span className="text-gray-500 text-xs capitalize">
                          {cartp.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-2/12">
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={() => removeItem(cartp, 1)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      <div className="mx-2 border text-center w-8">
                        
                        {cartp.quantity}
                        
                        </div>

                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        onClick={() => addItem(cartp, 1)}
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-2/12 font-semibold text-gray-500 text-sm">
                      ${cartp.precio}
                    </span>
                    <span className="text-center w-2/12 font-semibold text-gray-700 text-sm">
                      ${(cartp.precio * cartp.quantity).toFixed(2)}
                    </span>
                    <div className="basura w-1/12 pt-1">
                      <ion-icon
                        name="trash-outline"
                        onClick={() => removeProduct(cartp.id)}
                      ></ion-icon>
                    </div>
                  </div>
                );
              })}

              <Link to="/" className="flex font-semibold text-black text-sm mt-10">
                <svg
                  className="fill-current mr-2 text-black w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continuar comprando
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10 flex flex-col justify-end">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Resumen de compra
              </h1>
              <div className="py-5 mt-5">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm "
                >
                  Ingresa tu Cupón 
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Código"
                  className="p-2 text-sm w-full border"
                />
              </div>
              <button className="bg-black hover:bg-neutral-500 px-5 py-2 text-sm text-white uppercase">
                Aplicar
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total</span>
                  <span>${totalPrice().toFixed(2)}</span>
                </div >
                <Link to="/checkout" className="bg-black mt-2 font-semibold hover:bg-neutral-600 py-4 px-6 text-sm text-white uppercase w-full">
                  Iniciar Compra
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
  );
};

export default Cart;
