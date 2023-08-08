import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <> 
   {productos.map((p)=>{
        
     return(

       <Item 
              key={p.id}
              id={p.id}
              nombre= {p.nombre}
              precio= {p.precio}   
              img ={p.img}
              
              />
   ) 
      })
   }
  </> 
  )
}

export default ItemList