import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({movie}) => {
    
    return(      
        <div className ="contenedor-de-producto">
            <img className="ajuste-de-imagen" src={movie.img} alt={movie.name} />
            <p className="title">{movie.name}</p>
            <br/>
            <p className="price">${movie.price}</p>            
        </div>
    )
}

export default ItemDetail;