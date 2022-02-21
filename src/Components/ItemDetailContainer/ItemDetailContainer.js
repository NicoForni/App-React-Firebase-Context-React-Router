import React, { useEffect, useState } from "react";
import { getItem } from "../../Services/firebaseServices";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [products, setProducts] =  useState([]);
    const {productId} = useParams();    

    useEffect(() => {
        getItem(productId).then(products => {setProducts(products)})
        .catch(err => { console.log(err)})
        return (() => { setProducts() })
    }, [])
    
    return(
        <>
        <ItemDetail movie={products} />
        </>
    ) 
}

export default ItemDetailContainer;