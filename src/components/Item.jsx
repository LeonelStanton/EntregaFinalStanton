import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
  return (
    <section key={id} className="mx-5 w-auto h-auto p-10">
 
  <div className="w-fit h-fit group bg-gray-50 shadow-md ">
    <div className="relative overflow-hidden">
      <img className="h-auto w-full object-cover" src={img} alt=""/>
      <div className="absolute cursor-pointer h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Link to={`/item/${id}`}>
        <button className="bg-black text-white py-2 px-5 hover:bg-neutral-600">Ver mas detalles</button>
        </Link>
      </div>
    </div>
    <div className='ml-4 h-auto'>
    <h2 className="mt-3 text-lg font-light capitalize text-slate-800">{nombre}</h2>
    <p className="text-xl mt-2 inline-block font-semibold">{"$"+precio}</p>
    <p className="text-xs text-gray-500">3 cuotas sin interés de ${(precio/3).toFixed(2)}</p>
    </div>
  </div>
</section>
  )
}

export default Item