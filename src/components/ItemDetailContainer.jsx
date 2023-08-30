import ItemDetail from "./ItemDetail"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";
import Error from "./partials/Error404"



const ItemDetailContainer = () => {


const [producto, setProducto] = useState(null);
const { id } = useParams();
const [loading,setLoading]=useState(true)

	useEffect(() => {
    setLoading(true)
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "productos", id);
   
		getDoc(queryDoc).then((res) => setProducto({ id: res.id, ...res.data() }))
    
            .finally(() => 
            setTimeout(()=>{
              setLoading(false)
             
              
            },500)
             
              
            )
	}, [id]);
   


  /*let estaProduc=!isNaN(producto.precio);

  
 /* useEffect(()=>{
  setLoading(true)
 setTimeout(()=>{
    setLoading(false)
   
    
  },1000)
 },[] ) */
   

 if (producto) {
  if (producto.img == undefined) {
      return (
          <Error/>
      )
  }
}




  return (
    
   
    loading?
      
    (
      
      <div className="z-100 relative top-24 h-screen w-full flex items-center justify-center">
      <FadeLoader
  
      color={"#9ca3af"}
      loading={loading}
      
      size={200}
      
    /> 
    </div>): 
    
    
   
    ( <div className="flex justify-center  flex-col">
    
    <ItemDetail producto={producto}/>
    
    </div>
    )
    
     
  )
}

export default ItemDetailContainer