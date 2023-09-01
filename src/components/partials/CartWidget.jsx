import React from "react";
import bolsa from "../../assets/bolsadef.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div href="" className="pl-1 py-5 flex items-center">
      <Link to="/cart">
        <div className="relative ">
          <img src={bolsa} alt="" className="md:cursor-pointer h-10 " />
          <span className="text-white text-xs absolute w-5 h-5 top-0 right-[-5px] rounded-full bg-red-600 flex items-center justify-center">
            {totalProducts()}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
