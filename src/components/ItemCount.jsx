
import { useEffect, useState } from 'react'

const ItemCount = () => {

   const [contador, setContador] = useState(1)

   useEffect(()=>{

   },[contador])

   const sumar=()=>{
   setContador(contador+1)
   }

   const restar=()=>{
    if (contador>1){
        setContador(contador-1)
        }
        else setContador(1);
    }


  return (
    <div className='flex justify-between border-[1px] border-slate-200 px-3 py-2'>
      <button onClick={restar} className='text-xl text-slate-400 mr-4 font-bold'>-</button>
     <h1 className='text-xl font-normal text-slate-400'>{contador}   </h1>
      <button onClick={sumar} className='text-xl ml-4 font-bold text-slate-400'>+</button>
    </div>
  )
}

export default ItemCount
