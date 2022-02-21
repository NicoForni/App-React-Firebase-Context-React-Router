import "./itemlistcontainer.css";
import Itemcount from "../Itemcount/Itemcount";
import React, { useEffect, useState } from "react";
import { getByCategory } from "../../Services/firebaseServices";
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


    const onAdd = (count) => {        
        count > 0 ? console.log(`Agrego ${count} items al carrito`) : console.log(`No agrego nada!`);
    }
    
    return(    
        <>
        <h1>{greeting}</h1>          
        <Itemcount stock={5} initial={1} onAdd={onAdd} />
        <Itemlist products={products}/>
        <div className="loading">{loading && <p>Loading products...</p>}</div>
        </>
    )
}

export default Itemlistcontainer;