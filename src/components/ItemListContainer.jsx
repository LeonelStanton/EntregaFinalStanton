import React from 'react'
import remera1 from "../assets/remera1.png"
import remera2 from "../assets/remera2.png"
import remera3 from "../assets/remera3.png"
import bermuda1 from "../assets/bermuda1.png"
import bermuda2 from "../assets/bermuda2.png"
import remeraM1 from "../assets/remeraM1.png"
import musculosa from "../assets/musculosa.png"
import jeanM1 from "../assets/jeanM1.png"
import jeanM2 from "../assets/jeanM2.png"
import chomba1 from "../assets/chomba1.png"
import chomba2 from "../assets/chomba2.png"
import pollera from "../assets/pollera.jpg"
import camisa from "../assets/camisa.png"
import shortM from "../assets/shortM.jpeg"
import buzoM from "../assets/buzoM.png"
import remeraN1 from "../assets/remeraN1.png"
import remeraN2 from "../assets/remeraN2.png"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const ItemListContainer = () => {
const productos= [
  { id: 1,
    nombre: "Remera Homero",
    precio: 2999.99,
    img: remera1,
    category: "hombre",
  },
  { id: 2,
    nombre: "Remera Flores",
    precio: 2999.99,
    img:remera2,
    category: "hombre",
  },
  { id: 3,
    nombre: "Musculosa Harley",
    precio: 2499.99,
    img: remera3,
    category: "hombre",
  },
  { id: 4,
    nombre: "Bermuda Gabardina",
    precio: 7999.99,
    img:bermuda2,
    category: "hombre",
  },
  { id: 5,
    nombre: "Remera Nirvana",
    precio: 3999.99,
    img: remeraM1,
    category: "mujer",
  },
  { id: 6,
    nombre: "Musculosa de Lino",
    precio: 3999.99,
    img: musculosa,
    category: "mujer",
  },
  { id: 7,
    nombre: "Jean Moon",
    precio: 6999.99,
    img: jeanM1,
    category: "mujer",
  },
  { id: 8,
    nombre: "Bermuda Jean",
    precio: 5999.99,
    img: bermuda1,
    category: "hombre",
  },
  { id: 9,
    nombre: "Jean Moon Black",
    precio: 6999.99,
    img: jeanM2,
    category: "mujer",
  },
  { id: 10,
    nombre: "Chomba Rayada",
    precio: 5999.99,
    img: chomba1,
    category: "hombre",
  },
  { id: 11,
    nombre: "Chomba Palmeras",
    precio: 5999.99,
    img:chomba2,
    category: "hombre",
  },
  { id: 12,
      nombre: "Camisa Mallorca",
      precio: 7999.99,
      img:camisa,
      category: "hombre",
 },
  { id: 13,
    nombre: "Pollera de Jean",
    precio: 4999.99,
    img: pollera,
    category: "mujer",
  },
  { id: 14,
        nombre: "Short Blanco",
        precio: 4999.99,
        img: shortM,
        category: "mujer",
   },
  { id: 15,
        nombre: "Buzo Rustico",
        precio: 8999.99,
        img: buzoM,
        category: "mujer",
  },
  { id: 16,
    nombre: "Remera Mundial",
    precio: 2999.99,
    img: remeraN1,
    category: "niño",
},
{ id: 17,
  nombre: "Remera Selva",
  precio: 2999.99,
  img: remeraN2,
  category: "niño",
},
]

const {category}=useParams()
const [products, setProducts] = useState([])

const getproductos= ()=>{
  return new Promise((resolve, reject)=>{
    if (productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      },0)
    }
    else{
      reject (new Error("No hay datos"))
    }
  })}


useEffect(()=>{
  getproductos()
  .then((res)=>{
    category ? setProducts(res.filter((product)=> product.category.toLocaleLowerCase()===category.toLocaleLowerCase()))
             : setProducts (res.slice(1,7))
    
  })
  .catch ((error)=>{
    console.log(error)
  })
  

},[products])








  return (
    <div className='grid grid-cols-3 mx-20 relative top-20'>
    <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer