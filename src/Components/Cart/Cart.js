import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css"

const Cart = () => {
    const {cart} = useContext(CartContext);

    return (
        <div>
        <h1>Cart</h1>
        {cart.map((movie) => (
            <li key={movie.id}> {movie.quantity} </li>
        ))}
        </div>
    )
}

export default Cart