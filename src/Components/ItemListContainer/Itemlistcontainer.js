import "./itemlistcontainer.css";
import React, { useEffect, useState } from "react";
//import { getByCategory } from "../../services/firebaseServices";
import Itemlist from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore";
import { firestoreDatabase } from "../../services/firebase/firebase";


const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    const {categoryId} = useParams();      

    useEffect(() =>{
        setLoading(true);

        const productsCollectionRef = collection(firestoreDatabase, "products")

        getDocs(productsCollectionRef).then(response => {
            console.log(response);
        })

        return (() => {
            setProducts(products)            
        })
    }, [categoryId])

    
    return (    
        <>
        <h1>{greeting}</h1>                  
        <Itemlist products={products}/>
        <div className="loading">{loading && <p>Loading products...</p>}</div>
        </>
    )
}

export default Itemlistcontainer;