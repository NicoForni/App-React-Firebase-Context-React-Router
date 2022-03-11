import "./itemlistcontainer.css";
import React, { useEffect, useState } from "react";
import Itemlist from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore";
import { firestoreDatabase } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/notification/NotificationServices";


const Itemlistcontainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    const {categoryId} = useParams();          
    
    const setNotification = useNotificationServices()
    
    useEffect(() =>{             
        
        setLoading(true)   
        
        const collectionRef = categoryId ?
        query(collection(firestoreDatabase, 'products'), where('category', '==', categoryId))
        :
        collection(firestoreDatabase, "products")
        
        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {  
                return {id: doc.id, ...doc.data()}
            })            
            setProducts(products);
        }) 
        .catch((error) => {
            setNotification('error', error)
        })
        .finally(() => {
            setLoading(false)
        })
        
        return (()=> {
            setProducts()                    
        })        
    }, [categoryId])  // eslint-disable-line

    
    return (    
        <>        
        <div className="loading">{loading && <p>Loading products...</p>}</div>
        <Itemlist products={products}/>
        </>
    )
}

export default Itemlistcontainer;