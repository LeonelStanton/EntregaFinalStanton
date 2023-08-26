import ItemList from "./ItemList";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,} from "firebase/firestore";

const ItemListContainer = () => {


  const { categoria } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoria)
      );
      getDocs(queryFilter).then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProducts(
          res.docs
            .map((product) => ({ id: product.id, ...product.data() }))
            .slice(7, 13)
        )
      );
    }
  }, [categoria]);

  const [loading,setLoading]=useState(false)
    useEffect(()=>{
    setLoading(true)
   setTimeout(()=>{
      setLoading(false)
      
    },1000)
   },[] )

  return categoria ? (
    loading? (

      <div className="z-100 relative top-24 h-screen w-full flex items-center justify-center">
      <FadeLoader
  
      color={"#9ca3af"}
      loading={loading}
      
      size={200}
      
    /> 
    </div>)

      :
      (
      <div className="relative mt-28 z-10 h-full">
        <ItemList productos={products} categoria={categoria} />
      </div>
    )
  ) : (
    <div>
      <h1 className="text-3xl font-extrabold tracking-[.25em] ml-32 mt-14">
        PRODUCTOS DESTACADOS
      </h1>

      <div className="">
        <ItemList productos={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
