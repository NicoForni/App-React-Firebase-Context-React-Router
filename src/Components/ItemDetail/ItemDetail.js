import React, {useState,useContext} from "react";
import "./ItemDetail.css";
import Itemcount from "../Itemcount/Itemcount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({movie}) => {
    const [quantity, setQuantity] = useState(0);
    const {addToCart} = useContext(CartContext)    
    
    const onAdd = (quantity) => {        
        //quantity > 0 ? console.log(`Agregaste ${quantity} "${movie.name}" al carrito`) : console.log(`No agregaste nada`);
        setQuantity(quantity)

        addToCart(movie, quantity)
    }
    
    return(      
        <div className="contenedor-columna-detail">
            <div className="contenedor-de-producto-detail">
                <img className="ajuste-de-imagen-detail" src={movie.img} alt={movie.name} />    
                <div className="contenedor-texto-detail">
                    <div className="title-detail">{movie.name}</div>
                    <br/>
                    <div className="category-detail">Categoría: {movie.category}</div> 
                    <br/>
                    <div className="description-detail">{movie.description}</div>
                    <br/>
                    <div className="price-detail">${movie.price}</div>
                    {quantity > 0 ? <Link to="/cart"><button className="boton-carrito">IR AL CARRITO</button></Link> : <Itemcount stock={5} initial={1} onAdd={onAdd}/>}
                </div> 
            </div>
        </div>
    )
}

export default ItemDetail;