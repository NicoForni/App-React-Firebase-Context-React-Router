import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({movie}) => {
    
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
                </div> 
            </div>
        </div>
    )
}

export default ItemDetail;