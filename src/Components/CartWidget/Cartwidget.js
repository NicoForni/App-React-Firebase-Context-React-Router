import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Cartwidget.css";

const Cartwidget = () => {

    const {getQuantity} = useContext(CartContext);

    return(
        
        <div className="carrito-contenedor">
            <img src={"./images/carrito.png"} alt={"Carrito Icono"}></img>
            <p>{getQuantity()}item</p>
        </div>
    
    )
}

export default Cartwidget