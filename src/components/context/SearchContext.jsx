import React, { useState, useEffect, useContext, createContext  } from "react";
import { useForm } from '../partials/useForm';

import {
  collection,
  getDocs,
  getFirestore,
  
} from "firebase/firestore";

const SearchContext = createContext([]);
export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({children}) => {
    const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    getDocs(queryCollection).then((res) =>
      setProducts(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);
 
 
  return (
   <SearchContext.Provider value={{products,valueSearch, onInputChange, onResetForm }}>
    {children}
   </SearchContext.Provider>
  )
}

export default SearchProvider