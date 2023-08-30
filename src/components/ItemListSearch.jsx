import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "./context/SearchContext";
import FadeLoader from "react-spinners/FadeLoader";
import Item from "./Item";

const ItemListSearch = () => {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const location = useLocation();

  const { products } = useSearchContext();

  const filteredProducts = products.filter((p) =>
    p.nombre.toLowerCase().includes(location.state.toLowerCase())
  );

  return loading ? (
    <div className="z-100 relative top-24 h-screen w-full flex items-center justify-center">
      <FadeLoader color={"#9ca3af"} loading={loading} size={200} />
    </div>
  ) : filteredProducts == 0 ? (
    <div className="relative mt-32 z-10 h-screen">
      <h1 className="text-3xl font-extrabold  ml-40">
        No se encontraron resultados
      </h1>
    </div>
  ) : (
    <div className="relative mt-28 z-10 h-full">
      <h1 className="text-3xl font-extrabold  ml-32 mb-10">
        Se encontraron resultados:
      </h1>
      <div className="grid grid-cols-3 px-16 gap-16">
        {filteredProducts.map((p) => {
          return (
            <Item
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              precio={p.precio}
              img={p.img}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ItemListSearch;
