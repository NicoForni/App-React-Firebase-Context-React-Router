import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const {cart} = useContext(CartContext);

    return (
        <div>
        <h1>Cart</h1>
            <div className="carrito">
            {cart.map((movie) => (
                <li key={movie.id}> {movie.quantity} {movie.name} ${movie.price} </li>
            ))}
            </div>
        </div>
    )
}

export default Cart