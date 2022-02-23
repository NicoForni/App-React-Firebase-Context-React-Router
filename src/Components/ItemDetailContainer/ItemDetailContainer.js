import React, { useEffect, useState } from "react";
import { getItem } from "../../services/firebaseServices";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [product, setProduct] =  useState([]);
    const {productId} = useParams();    

    useEffect(() => {
        getItem(productId).then(product => {setProduct(product)})
        .catch(err => { console.log(err)})
        return (() => { setProduct() })
    }, [productId])
    
    return (        
        <ItemDetail movie={product} />      
    )
     
}

export default ItemDetailContainer;