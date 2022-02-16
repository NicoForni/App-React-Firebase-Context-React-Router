import React from "react";
import "./Item.css";

const Item = ({movie}) => {
    
    return (
        
            <div className="contenedor-de-producto">
                <img className="ajuste-de-imagen" src={movie.img} alt={movie.name} />
                <p className="title">{movie.name}</p>
                <br/>
                <p className="price">${movie.price}</p>            
            </div>
      
    )
}

export default Item;