
import NavBar from "./components/partials/NavBar";
import Home from "./components/home/Home"
import Footer from "./components/partials/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Contacto from "./components/Contacto";





function App() {
  

  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
     
         <Route exact path="/" element={<Home/>} /> 
         <Route exact path="/category/:category" element={<ItemListContainer/>}/>
         <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
         <Route exact path="/contacto" element={<Contacto/>} />
         <Route exact path="/cart" element={<CartWidget/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
  )
}

export default App
