import ItemDetail from "./ItemDetail"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";



const ItemDetailContainer = () => {


const [producto, setProducto] = useState([]);
const { id } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "productos", id);
		getDoc(queryDoc).then((res) => setProducto({ id: res.id, ...res.data() }));
	}, [id]);

 
  let estaProduc=!isNaN(producto.precio);
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
  setLoading(true)
 setTimeout(()=>{
    setLoading(false)
    
    
  },500)
 },[] )
   


  return (
    
   
    loading?
      
    (
      <div className="z-100 relative top-24 h-screen w-full flex items-center justify-center">
      <FadeLoader
  
      color={"#9ca3af"}
      loading={loading}
      
      size={200}
      
    /> 
    </div> ): 
    
   
    (
    <ItemDetail producto={producto}/>
    )
  
     
  )
}

export default ItemDetailContainer