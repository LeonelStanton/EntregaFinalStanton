import React from "react";
import fondo2 from "../../assets/fondo2.png";
import fondo1 from "../../assets/fondo1.jpg";
import Item from "../Item";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  } from "firebase/firestore";

  


// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider2() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
  
      getDocs(queryCollection).then((res) =>
        setProducts(
          res.docs
            .map((product) => ({ id: product.id, ...product.data() }))
            .slice(14, 20)
        )
      );
    
  }, []);

  return (
    <>
      <div className="mt-28">
        <img src={fondo1} alt="" />
      </div>
      <div className="mySwiper mt-20 relative flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold tracking-[.30em] m-auto mb-5">
          COLECCION 23
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mx-5 mb-10"
        >
          {products.map((p) => {
            return (
              <SwiperSlide key={p.id}>
                <Item
                  id={p.id}
                  nombre={p.nombre}
                  precio={p.precio}
                  img={p.img}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="">
          <img src={fondo2} alt="" />
        </div>
      </div>
    </>
  );
}
