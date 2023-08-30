import { useState, useContext, createContext,useEffect } from 'react'

const CartContext = createContext([]);


const init = JSON.parse(localStorage.getItem('cart')) || []

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState(init)
 

 
  
   const addItem = (item, quantity, talle) =>{
   
	  if (isInCart(item.id, talle)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id && product.talle === talle
						? { ...product, quantity: product.quantity + quantity, talle}
						: product;
				}),
			);
     
	    } else {
	  
        setCart([...cart, { ...item, quantity, talle }]);
    }
	    
      
   }



  const removeItem = (item,quantity, talle)=>{
   if (item.quantity > quantity)
   {
    setCart(
      cart.map((product) => {
        return product.id === item.id && product.talle ===talle
          ? { ...product, quantity: product.quantity - quantity, talle }
          : product;
      }),
    );
   }
   else{
    removeProduct(item.id, talle)
   }
  }
   
	const removeProduct = (id, talle) => {
    const newcart = cart.filter((product) => product.id !== id || product.talle !==talle)
  setCart(newcart);
  }

  const isInCart = (id, talle) => {
   
		return cart.some((product) => product.id === id && product.talle ===talle )
  
  }

  const totalProducts = () =>{
		return cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);
    }

  const totalPrice = () => {
            return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
        };

const clearCart = () => setCart([]);
    
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])
  return (
    <CartContext.Provider value={{cart, addItem, removeProduct,isInCart, totalProducts, totalPrice, removeItem,clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider