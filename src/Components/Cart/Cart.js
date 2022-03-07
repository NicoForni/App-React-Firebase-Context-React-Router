import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, removeProduct, clearItems, getTotal} = useContext(CartContext);

    if (cart.length === 0) {
        return  <> 
                    <div className="sin-productos">No agregaste nada 😞</div>
                    <Link to="/"><button className="volver-inicio">VOLVER A HOME</button></Link> 
                </>
    }

    return (
        <div>
            <div className="cart">Carrito</div>
                <div className="carrito">
                    {cart.map((movie) => (
                        <div key={movie.id}>
                            <li> {movie.quantity} "{movie.name}" ${movie.price}                                                         
                                <button className="eliminar-producto" onClick={() => removeProduct(movie.id)}>
                                    X
                                </button>
                            </li>
                        </div>
                    ))} 
                    <div className="total">TOTAL: ${getTotal()}</div>
                    <button className="vaciar-carrito" onClick={() => clearItems()}>VACIAR CARRITO</button>
                    <button className="finalizar-compra" onClick={() => console.log("Muchas gracias")}>FINALIZAR COMPRA</button>
                </div>
        </div>
    )
}
export default Cart