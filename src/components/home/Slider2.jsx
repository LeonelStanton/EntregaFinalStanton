import React from 'react';
import chomba1 from "../../assets/chomba1.png"
import chomba2 from "../../assets/chomba2.png"
import pollera from "../../assets/pollera.jpg"
import camisa from "../../assets/camisa.png"
import shortM from "../../assets/shortM.jpeg"
import buzoM from "../../assets/buzoM.png"
import fondo2 from "../../assets/fondo2.png"
import fondo1 from "../../assets/fondo1.webp"
import Item from '../Item'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation } from 'swiper/modules';
const masProductos= [
    { id: 10,
      nombre: "Chomba Rayada",
      precio: 5999.99,
      img: chomba1,
    },
    { id: 11,
      nombre: "Chomba Palmeras",
      precio: 5999.99,
      img:chomba2,
    },
    { id: 12,
        nombre: "Camisa Mallorca",
        precio: 7999.99,
        img:camisa,
   },
    { id: 13,
      nombre: "Pollera de Jean",
      precio: 4999.99,
      img: pollera,
    },
    { id: 14,
          nombre: "Short Blanco",
          precio: 4999.99,
          img: shortM,
     },
    { id: 15,
          nombre: "Buzo Rustico",
          precio: 8999.99,
          img: buzoM,
    },
]
export default function Slider2() {
  return (
    <>
    <div className='mt-40' >
      <img src={fondo1} alt="" />
      
    </div>
    <div className="mySwiper mt-16 relative flex flex-col justify-center">
      <h1 className='text-3xl font-extrabold tracking-[.30em] m-auto'>COLECCION 23</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper mx-5 mb-10"
      >


{masProductos.map((p)=>{
        
        return(
             <SwiperSlide key={p.id}>
          <Item id={p.id}
                 nombre= {p.nombre}
                 precio= {p.precio}   
                 img ={p.img}
                 
                 />
                 </SwiperSlide>
      ) 
         })
      }
      </Swiper>

   <div className=''>
    <img src={fondo2} alt="" />
   </div>
   </div>
    </>
  );
}
