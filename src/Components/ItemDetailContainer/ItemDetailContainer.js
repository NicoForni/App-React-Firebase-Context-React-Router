import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import {getDoc, doc}from "firebase/firestore";
import { firestoreDatabase } from "../../Services/firebase/firebase";

const ItemDetailContainer = () => {
    
    const [product, setProduct] =  useState([]);
    const {productId} = useParams();    

    useEffect(() => {
        

        const docRef = doc(firestoreDatabase, "products", productId)

        getDoc(docRef).then(response =>{
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        })
        .finally(()=>{
            
        })

        return (() => { 
            setProduct() 
        })
    }, [productId])
    
    return (        
        <ItemDetail movie={product} />   
    )
     
}

export default ItemDetailContainer;