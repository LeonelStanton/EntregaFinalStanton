
import NavBar from "./components/partials/NavBar";
import Home from "./components/home/Home"
import Footer from "./components/partials/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import CartProvider from "./components/context/CartContext";
import Error from "./components/partials/Error404";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemListSearch from "./components/ItemListSearch";
import SearchProvider from "./components/context/SearchContext";



function App() {
  

  return (
    <BrowserRouter>
    <SearchProvider>
    <CartProvider>
      <NavBar/>

      <Routes>
     
         <Route exact path="/" element={<Home/>} /> 
         <Route exact path="/category/:categoria" element={<ItemListContainer/>}/>
         <Route exact path="/search" element={<ItemListSearch/>}/>
         <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
         <Route exact path="/contacto" element={<Contacto/>} />
         <Route exact path="/cart" element={<Cart/>}/>
         <Route exact path="/checkout" element={<Checkout/>}/>
         <Route exact path="*" element={<Error/>} />
      </Routes>

      <Footer/>
      </CartProvider>
      </SearchProvider>
      </BrowserRouter>
  )
}

export default App
