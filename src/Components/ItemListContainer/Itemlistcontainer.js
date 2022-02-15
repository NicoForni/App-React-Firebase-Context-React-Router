import "./itemlistcontainer.css";
import Itemcount from "../Itemcount/Itemcount";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import Itemlist from "../Itemlist/Itemlist";

const Itemlistcontainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts().then(products => {            
            setProducts(products)
        })
    }, [])

    const onAdd = (count) => {        
        count > 0 ? console.log(`Agrego ${count} items al carrito`) : console.log(`No agrego nada!`);
    }
    
    return(    
        <>
        <h1>{greeting}</h1>          
        <Itemcount stock={5} initial={1} onAdd={onAdd} />
        <Itemlist products={products}/>
        </>
    )
}

export default Itemlistcontainer;