import React from "react";
import Item from "./Item";
import { useState } from "react";


const ItemList = ({ productos, categoria }) => {
  
 
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 150,
  });
  

  const [minPrice, setMinPrice] = useState(0);
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };
 
  
  const handleChangeCategory = (event) => {
   
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
   
  };

  
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.precio >= filters.minPrice &&
        (filters.category === "all" || product.subcategory === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(productos);
  

  return (
    <>
      <div className=" mb-24 ">
        <div className="font-medium text-base">
          {categoria == "Hombre" && (
            <div className="flex  justify-center gap-20 items-center mb-10 md:flex-row flex-col">
              <div className="relative">
                <label htmlFor="category" className="mr-4">
                  Categoría :
                </label>
                <select
                  id="category"
                  className="border text-neutral-600 cursor-pointer border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                  onChange={handleChangeCategory}
                >
                  <option value="all">Todas</option>
                  <option value="remeras">Remeras</option>
                  <option value="jeans">Jeans</option>
                  <option value="bermudas">Bermudas</option>
                  <option value="camisas">Camisas</option>
                </select>
              </div>
              <div className="flex gap-5 p-4 flex-col sm:flex-row ">
                <label htmlFor="precio">Precio a partir de:</label>
                <input
                  type="range"
                  id="precio"
                  min="0"
                  max="8999"
                  onChange={handleChangeMinPrice}
                  value={minPrice}
                  className="rango"
                  />
                  <span>${minPrice}</span>
              </div>
            </div>
          )}
          {categoria == "Mujer" && (
           <div className="flex  justify-center gap-20 items-center mb-10 md:flex-row flex-col">
           <div className="relative">
             <label htmlFor="category" className="mr-4">
               Categoría :
             </label>
             <select
               id="category"
               className="border text-neutral-600 cursor-pointer border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
               onChange={handleChangeCategory}
             >
               <option value="all">Todas</option>
               <option value="remeras">Remeras</option>
               <option value="jeans">Jeans</option>
               <option value="calzas">Calzas</option>
               <option value="polleras">Polleras</option>
               <option value="shorts">Shorts</option>
               <option value="buzos">Buzos</option>
               <option value="camperas">Camperas</option>
               
             </select>
           </div>
           <div className="flex gap-5 p-4 flex-col sm:flex-row ">
             <label htmlFor="precio">Precio a partir de:</label>
             <div>
             <input
               type="range"
               id="precio"
               min="0"
               max="8999"
               onChange={handleChangeMinPrice}
               value={minPrice}
               className="rango mb-5 md:mb-0"
             />
             <span className="sm:ml-3 ml-0">${minPrice}</span>
             </div>
           </div>
         </div>
          )}
          {categoria == "Niño" && (
            <div className="flex  justify-center gap-20 items-center mb-10 md:flex-row flex-col">
            <div className="relative">
              <label htmlFor="category" className="mr-4">
                Categoría :
              </label>
              <select
                id="category"
                className="border text-neutral-600 cursor-pointer border-gray-300 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                onChange={handleChangeCategory}
              >
                <option value="all">Todas</option>
                <option value="remeras">Remeras</option>
                
              </select>
            </div>
            <div className="flex gap-5 p-4 flex-col sm:flex-row ">
              <label htmlFor="precio">Precio a partir de:</label>
              <input
                type="range"
                id="precio"
                min="0"
                max="2999"
                onChange={handleChangeMinPrice}
                value={minPrice}
                className="rango mb-5 md:mb-0"
                />
                <span className="sm:ml-3 ml-0">${minPrice}</span>
            </div>
          </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center grid-cols-1 gap-16 ">
          
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
    </>
  );
};

export default ItemList;
