import "./itemlistcontainer.css";
import React, { useEffect, useState } from "react";
import { getByCategory } from "../../services/firebaseServices";
import Itemlist from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";


const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    const {categoryId} = useParams();      

    useEffect(() =>{
        getByCategory(categoryId).then(products => {            
            setProducts(products)            
            setLoading(false);
        })        
    }, [categoryId])

    
    return(    
        <>
        <h1>{greeting}</h1>                  
        <Itemlist products={products}/>
        <div className="loading">{loading && <p>Loading products...</p>}</div>
        </>
    )
}

export default Itemlistcontainer;