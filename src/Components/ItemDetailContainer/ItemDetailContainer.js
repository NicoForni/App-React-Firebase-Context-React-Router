import React, { useEffect, useState } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    
    const [products, setProducts] =  useState([]);

    useEffect(() => {
        getItem().then(products => {setProducts(products)})
    }, [])
    
    return(
        <>
        <ItemDetail movie={products} />
        </>
    ) 
}

export default ItemDetailContainer;