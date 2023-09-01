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
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Los emails no coinciden"),
  telefono: yup
    .string()
    .required("El telefono es un campo requerido")
    .matches(/^\+?\d{7,15}$/, "El numero de telefono es invalido"),
});

const Checkout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const fecha = new Date();
  const comprar = (data) => {
    setLoading(true);

    const pedido = {
      cliente: data,
      productos: cart,
      total: totalPrice(),
      fecha: fecha,
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
      <div className="h-screen relative top-20 mb-32 flex justify-center items-center w-full  ">
        <div className=" bandera flex justify-between w-full h-fit md:w-3/5">
          <div className="p-5 m-auto flex flex-col justify-center items-center w-2/3">
            <h1 className="text-3xl text-black font-normal tracking-wide mb-1">
              Muchas gracias por tu compra
            </h1>
            <p className="text-xl text-black font-light">
              Tu número de orden es :{" "}
              <span className="font-semibold">{pedidoId}</span>{" "}
            </p>
          </div>
          <div className="ml-2 w-1/3 flex">
            <img src={messi} alt="" className="w-auto h-full " />
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
    <div className="bg-white  flex justify-center  relative top-32 h-full">
      <div className="bg-white shadow-lg m-8 w-4/5 lg:flex-row flex-col flex justify-center  rounded-xl h-full mb-32">
        <form
          className="w-full lg:w-2/4 m-auto flex flex-col items-center justify-center lg:block"
          onSubmit={handleSubmit(comprar)}
        >
          <div className="text-2xl  font-semibold text-black m-6">
            Finalizar Compra
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center lg:items-start  w-full ">
            <div className="m-6 flex flex-col items-center justify-center w-full lg:block ">
              <p className="text-base text-stone-400 mb-2">
                Ingresá tu nombre
              </p>
              <input
                type="text"
                {...register("nombre")}
                className="border-b-2 border-stone-400 text-neutral-900 lg:w-full w-3/4 outline-none bg-inherit"
              />
              <p className="text-xs font-light text-red-600 mt-1">
                {errors.nombre?.message}
              </p>
              <p className="text-base text-stone-400 mt-6  mb-2">
                Ingresa tu apellido
              </p>
              <input
                type="text"
                {...register("apellido")}
                className="border-b-2 border-stone-400 text-neutral-900 lg:w-full w-3/4 outline-none"
              />
              <p className="text-xs font-light text-red-600 mt-1">
                {errors.apellido?.message}
              </p>
            </div>
            <div className="m-6 flex flex-col items-center justify-center w-full lg:block ">
              <p className="text-base text-stone-400 mb-2 ">
                Ingresá tu teléfono
              </p>
              <input
                type="phone"
                {...register("telefono")}
                className="border-b-2 border-stone-400 text-neutral-900 lg:w-full w-3/4 outline-none"
              />
              <p className="text-xs font-light text-red-600 mt-1">
                {errors.telefono?.message}
              </p>
              <div className="my-6  flex flex-col items-center justify-center w-full lg:block">
                <p className="text-base text-stone-400 mt-6 mb-2">
                  Ingresá tu e-mail
                </p>
                <input
                  type="text"
                  {...register("email")}
                  className="border-b-2 border-stone-400 text-neutral-900 lg:w-full w-3/4 outline-none"
                />
                <p className="text-xs font-light text-red-600 mt-1">
                  {errors.email?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="m-6 lg:items-end flex flex-col items-center justify-center lg:w-[57%] w-full lg:block">
            <p className="text-base text-stone-400 mb-2 ">Confirmar e-mail</p>
            <input
              type="text"
              {...register("confirmEmail")}
              className="border-b-2 border-stone-400 text-neutral-900  w-3/4 outline-none"
            />
            <p className="text-xs font-light text-red-600 mt-1">
              {errors.confirmEmail?.message}
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
            <div className="ml-2">Springfield,Massachusetts</div>
          </div>
          <div className="text-white m-6 text-sm flex leading-3 ">
            <ion-icon name="call-outline" className="m-2 "></ion-icon>
            <div className="ml-2"> 123-456-7890 </div>
          </div>
          <div className="text-white m-6 text-sm flex leading-3 ">
            <ion-icon name="mail-outline" className="m-2"></ion-icon>
            <div className="ml-2"> example@email.com </div>
          </div>
          <div className="icons-checkout flex justify-between items-center px-5 mt-20">
            <div className="forma"></div>
            <ion-icon name="logo-facebook" className="m-2"></ion-icon>
            <ion-icon name="logo-linkedin" className="m-2"></ion-icon>
            <ion-icon
              name="logo-twitter"
              className="m-2  cursor-pointer"
            ></ion-icon>
            <ion-icon name="logo-instagram" className="m-2 "></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
