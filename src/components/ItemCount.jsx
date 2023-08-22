import { useEffect, useState } from "react";

const ItemCount = ({initial, onAdd, openModal}) => {
  const [contador, setContador] = useState(initial);

 useEffect(() => {}, [contador])

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex justify-between border-[1px] border-slate-200 px-3 py-2">
        <button
          onClick={restar}
          className="text-xl text-slate-400 mr-4 font-bold"
        >
          -
        </button>
        <h1 className="text-xl font-normal text-slate-400">{contador} </h1>
        <button
          onClick={sumar}
          className="text-xl ml-4 font-bold text-slate-400"
        >
          +
        </button>
      </div>
      <div className="w-4/5 ml-4">
        <button onClick={()=> {onAdd(contador);openModal(true)}}
       className="flex w-full h-full justify-center text-white font-semibold text-base leading-6 bg-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-500 rounded">
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
