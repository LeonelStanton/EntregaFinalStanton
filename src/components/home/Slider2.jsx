import fondo2 from "../../assets/fondo2.png";
import Iframe from 'react-iframe'
import { useSearchContext } from "../context/SearchContext";
import Item from "../Item";
import React from "react";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider2() {
  const { products } = useSearchContext();

  return (
    <>
    
    <div className="video-container">
        <Iframe url="https://player.vimeo.com/video/857301479?title=0&byline=0&portrait=0&transparent=0&autoplay=1&loop=1&muted=1?showinfo=0&iv_load_policy=3&controls=0"
       frameborder="0" 
       
       
        
        className= "video"
        
        
        />
    
                
        </div>
     
      <div className="mySwiper mt-20  flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold tracking-[.30em] m-auto mb-5">
          COLECCION 23
        </h1>
        <div className=" ">
        <Swiper
        breakpoints={{
          // when window width is >= 640px
          0:{
            slidesPerView:1,
            spaceBetween:10,
          },

          768: {
            
            slidesPerView: 2,
            spaceBetween:10,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3,
            spaceBetween:10,
            
          },
        }}
  
          
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-10 py-20 px-5 "
        >
          {products.slice(14, 20).map((p) => {
            return (
              <SwiperSlide key={p.id} className="px-5 " >
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
         </div>
        <div className="w-fit h-fit">
        <img src={fondo2} alt="" className="h-auto  w-full " />
      </div>
      </div>
    </>
  );
}
