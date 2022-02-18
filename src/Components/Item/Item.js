import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({movie}) => {
    
    return (
        
            <div className="contenedor-de-producto">
                <img className="ajuste-de-imagen" src={movie.img} alt={movie.name} />
                <p className="title">{movie.name}</p>
                <br/>
                <p className="price">${movie.price}</p>  
                <br/>
                <p className="ver-detalle">
                    <Link to={`/detail/${movie.id}`}>Ver detalle</Link>
                </p>
            </div>
      
    )
}

export default Item;