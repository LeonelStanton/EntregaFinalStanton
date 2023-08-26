import React, { useState, useEffect } from "react";
import { useCartContext } from "./context/CartContext";
import FadeLoader from "react-spinners/FadeLoader";
import messi from "../assets/messi.avif";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const schema = yup.object({
  nombre: yup
    .string()
    .required("El nombre es un campo requerido")
    .matches(/^[a-zA-Z ]{3,50}$/, "El nombre de usuario es invalido"),
  apellido: yup
    .string()
    .required("El apellido es un campo requerido")
    .matches(/^[a-zA-Z ]{3,50}$/, "El apellido es invalido"),
  email: yup
    .string()
    .required("El email es un campo requerido")
    .matches(
      /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
      "El email es invalido"
    ),
  telefono: yup
    .string()
    .required("El telefono es un campo requerido")
    .matches(/^\+?\d{7,15}$/, "El numero de telefono es invalido"),
});

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [pedidoId, setPedidoId] = useState("");

  const { cart, totalPrice, clearCart } = useCartContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const comprar = (data) => {
    setLoading(true);
  
    const pedido = {
      cliente: data,
      productos: cart,
      total: totalPrice(),
    };
    
    const db = getFirestore();
    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      clearCart();
    });
  };

  if (pedidoId) {
    return (
      <div className="h-screen relative top-20 mb-32 flex justify-center items-center">
        <div className=" bandera flex justify-between w-3/5">
          <div className="p-5 m-auto">
            <h1 className="text-3xl text-black font-normal tracking-wide mb-1">
              Muchas gracias por tu compra
            </h1>
            <p className="text-xl text-black font-light">Tu número de pedido es : <span className="font-semibold">{pedidoId}</span> </p>
            
          </div>
          <div className="ml-2 w-1/3 h-fit" >
          <img src={messi} alt="" className=""/>
          </div>
        </div>
      </div>
    );
  }

  return loading ? (
    <div className="relative top-24 w-full flex items-center justify-center h-screen">
      <FadeLoader color={"#9ca3af"} loading={loading} size={200} />
    </div>
  ) : (
    <div className="bg-white  flex justify-center relative top-32 h-full">
      <div className="bg-white shadow-lg m-8 w-3/5 grid lg:flex justify-center rounded-xl h-full mb-32">
        <form className="w-3/4 lg:w-2/3" onSubmit={handleSubmit(comprar)}>
          <div className="text-2xl  font-semibold text-black m-6">
            Finalizar Compra
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="m-6">
              <p className="text-base text-stone-400 mb-2">Ingresá tu nombre</p>
              <input
                type="text"
                {...register("nombre")}
                className="border-b-2 border-stone-400 text-neutral-900 w-44 outline-none bg-inherit"
              />
              <p className="text-xs font-light text-red-600 mt-1">
                {errors.nombre?.message}
              </p>
              <p className="text-base text-stone-400 mt-6 mb-2">
                Ingresá tu e-mail
              </p>
              <input
                type="text"
                {...register("email")}
                className="border-b-2 border-stone-400 text-neutral-900 w-44 outline-none"
              />
              <p className="text-xs font-light text-red-600 mt-1">
                {errors.email?.message}
              </p>
            </div>
            <div className="m-6">
              <p className="text-base text-stone-400 mb-2">
                Ingresa tu apellido
              </p>
              <input
                type="text"
                {...register("apellido")}
                className="border-b-2 border-stone-400 text-neutral-900 w-44 outline-none"
              />
              <p className="text-xs font-light text-red-600 mt-1">
                {errors.apellido?.message}
              </p>
            </div>
          </div>
          <div className="ml-6 items-end">
            <p className="text-base text-stone-400 mt-6 mb-2">
              Ingresá tu teléfono
            </p>
            <input
              type="phone"
              {...register("telefono")}
              className="border-b-2 border-stone-400 text-neutral-900 w-44 outline-none"
            />
            <p className="text-xs font-light text-red-600 mt-1">
              {errors.telefono?.message}
            </p>
            <div className="flex py-7">
              <button
                type="submit"
                className=" mt-8 pl-2 py-4 pr-2 bg-black rounded text-white font-medium w-44 hover:bg-neutral-700"
              >
               Comprar
              </button>
            </div>
          </div>
        </form>
        <div className="lg:w-2/5 bg-black rounded-xl p-3">
          <div className="text-white  font-base font-semibold mb-10 mt-3 ml-6">
            Informacion de contacto
          </div>
          <div className="text-white m-6 text-sm leading-3 flex">
            <ion-icon
              name="location-sharp"
              className=" text-pink-500 hover:text-white"
            ></ion-icon>
            <div className="ml-2">
            Springfield,Massachusetts
            </div>
          </div>
          <div className="text-white m-6 text-sm flex leading-3 ">
            <ion-icon
              name="call-outline"
              className="m-2 "
            ></ion-icon>
            <div className="ml-2"> 123-456-7890 </div>
          </div>
          <div className="text-white m-6 text-sm flex leading-3 ">
          <ion-icon name="mail-outline" className="m-2"></ion-icon>
            <div className="ml-2"> example@email.com </div>
          </div>
          <div className="icons-checkout flex justify-between items-center px-5 mt-20">
          <div className="forma"></div>
            <ion-icon
              name="logo-facebook"
              className="m-2"
            ></ion-icon>
            <ion-icon
              name="logo-linkedin"
              className="m-2"
            ></ion-icon>
            <ion-icon
              name="logo-twitter"
              className="m-2  cursor-pointer"
            ></ion-icon>
            <ion-icon
              name="logo-instagram"
              className="m-2 "
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
