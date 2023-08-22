import React from 'react'
import catHombre from "../../assets/categoriaHombre.webp"
import catMujer from "../../assets/categoriaMujer.webp"
import catNiños from "../../assets/categoriaNiños.webp"
import { Link } from 'react-router-dom'

const Seccions = () => {

  return (
<>
    <div className='md:h-screen md:w-full md:gap-4 md:flex-row md:justify-around flex md:mt-32 flex-col relative justify-center items-center'>
        <div  className='md:w-[30%] md:h-[80%] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover object-cover relative hover:opacity-80  cursor-pointer shadow-lg shadow-slate-700 overflow-hidden'>
        <img src={catHombre} alt="" className='w-full h-full object-cover absolute transition duration-500 ease-out hover:scale-105 mix-blend-overlay'/>
            <div className='flex flex-col items-center content-center absolute brightness-120'>
              
              <Link to="/category/Hombre">
              <button className='relative mt-4 text-xs font-300 tracking-[.30em] bg-transparent hover:bg-neutral-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>VER CATEGORIA</button>
              </Link>
            </div>
          </div>
          <div  className='md:w-[30%] md:h-[80%] flex flex-col items-center justify-center  bg-center bg-no-repeat bg-cover object-cover w-96 h-96 relative hover:opacity-80 cursor-pointer shadow-lg shadow-slate-700 overflow-hidden'>
          <img src={catMujer} alt="" className='w-full h-full object-cover absolute transition duration-500 ease-out hover:scale-105 mix-blend-overlay'/>
            <div className='flex flex-col items-center content-center absolute place-content-center'>
           
             <Link to="/category/Mujer">
              <button className='relative mt-4  text-xs font-300 tracking-[.30em] bg-transparent hover:bg-neutral-950 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>VER CATEGORIA</button>
              </Link>
            </div>
          </div>
          <div  className='md:w-[30%] md:h-[80%] flex flex-col items-center justify-center  bg-center bg-no-repeat bg-cover object-cover w-96 h-96 relative hover:opacity-80 cursor-pointer shadow-lg shadow-slate-700 overflow-hidden'>
          <img src={catNiños} alt="" className='w-full h-full object-cover absolute transition duration-500 ease-out hover:scale-105 mix-blend-overlay'/>
            <div className='flex flex-col items-center content-center'>
            <Link to="/category/Niño">
              <button className='relative mt-4 text-xs font-300 tracking-[.30em] bg-transparent hover:bg-neutral-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>VER CATEGORIA</button>
              </Link>
            </div>
          </div>

         


    </div>
    
    
    </>
  )
}

export default Seccions