import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const addToCart = (movie,quantity) => {        
        if (isInCart(movie.id)) {
            sumarCantidad(movie.id, quantity)            
        }
        else {
            setCart([...cart,{...movie, quantity}]);
        }    
    };

    const isInCart = (id) => {
        const validate = cart.some((product) => product.id === id);
        return validate;
    }

    const sumarCantidad = (id, quantity) => {
        cart.map((product) => product.id === id && (product.quantity += quantity)); //si el producto es igual a product.id ENTONCES sumame la cantidad
        
    }

    const clearItems = () => {
        setCart([])
    }

    const removeProduct = (id) => {
        const productFilter = cart.filter((product) => product.id !== id )
        setCart(productFilter)
    }

    const getQuantity = () => {
        //CART.REDUCE PROBAR
    }

    const getTotal = () => {
        const countArray = cart.map(product => product.price*product.quantity);
        
        if(countArray.length){
            return countArray.reduce((acc, item) => acc += item);
        } else {
            return 0;
        }
    }

    
    return(
        <CartContext.Provider value={{cart, addToCart, clearItems, removeProduct, getQuantity, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}