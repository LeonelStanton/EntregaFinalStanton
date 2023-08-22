import { useState, useContext, createContext } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  
   const addItem = (item, quantity) =>{
	  if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
     
	    } else {
	  
        setCart([...cart, { ...item, quantity }]);
    }
	    
      
   }



  const removeItem = (item,quantity)=>{
   if (item.quantity > quantity)
   {
    setCart(
      cart.map((product) => {
        return product.id === item.id
          ? { ...product, quantity: product.quantity - quantity }
          : product;
      }),
    );
   }
   else{
    removeProduct(item.id)
   }
  }
   
	const removeProduct = (id) => {
    const newcart = cart.filter((product) => product.id !== id)
  setCart(newcart);
  }

  const isInCart = (id) => {
		return cart.some((product) => product.id === id)
  }

  const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

  const totalPrice = () => {
            return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
        };

const clearCart = () => setCart([]);
    
  return (
    <CartContext.Provider value={{cart, addItem, removeProduct,isInCart, totalProducts, totalPrice, removeItem,clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider