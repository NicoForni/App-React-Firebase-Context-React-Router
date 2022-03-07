import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Cartwidget.css";

const Cartwidget = () => {

    const {getQuantity, cart} = useContext(CartContext);
    

    return(
        
        <>
        {cart.length === 0 ? null :
        <div className="carrito-contenedor">
            <img src="/images/carrito.png" alt="Carrito Icono"></img>
            <span className="cantidad-agregada">{getQuantity()}</span>
        </div>}
        </>
    )
}

export default Cartwidget