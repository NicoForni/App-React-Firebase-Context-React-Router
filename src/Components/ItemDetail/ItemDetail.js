import React, {useState,useContext,useEffect} from "react";
import "./ItemDetail.css";
import Itemcount from "../Itemcount/Itemcount";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useNotificationServices } from "../../services/notification/NotificationServices";

import {getDoc, doc}from "firebase/firestore";
import { firestoreDatabase } from "../../services/firebase/firebase";

const ItemDetail = ({movie}) => {
    const [quantity, setQuantity] = useState(0);
    const [loading, setLoading] = useState (true);
    const {productId} = useParams();   
    const {addToCart} = useContext(CartContext);
    const setNotification = useNotificationServices()    
    
    const onAdd = (quantity) => {        
        
        setQuantity(quantity)

        addToCart(movie, quantity)
        setNotification("success",`Agregaste ${movie.name} al carrito`)
    }
    
    useEffect(() => {

        const docRef = doc(firestoreDatabase, "products", productId)

        getDoc(docRef).then(response =>{
            setLoading(false) 
            
        }) 
        
          
    }, []) //eslint-disable-line
    

    
    return(      
        <div className="contenedor-columna-detail">
            <div className="contenedor-de-producto-detail">
                {loading ? <div className="loading"> <h1>Loading</h1> </div> :
                    <> 
                        <img className="ajuste-de-imagen-detail" src={movie.img} alt={movie.name} />    
                        <div className="contenedor-texto-detail">
                            <div className="title-detail">{movie.name}</div>
                            <br/>
                            <div className="category-detail">Categoría: {movie.category}</div> 
                            <br/>
                            <div className="description-detail">{movie.description}</div>
                            <br/>
                            <div className="price-detail">${movie.price}</div>
                            {quantity > 0 ? <Link to="/cart"><button className="boton-carrito">FINALIZAR</button></Link> : <Itemcount stock={movie.stock} initial={1} onAdd={onAdd}/>}
                        </div> 
                    </>
                }
            </div>
        </div>
    )
}

export default ItemDetail;