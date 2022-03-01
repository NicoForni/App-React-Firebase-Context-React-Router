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
        cart.map((product) => product.id === id && (product.quantity += quantity)); //si el producto es igual product.id ENTONCES sumame la cantidad
        
    }

    const clearItems = () => {
        setCart([])
    }

    const removeProduct = (id) => {
        const productFilter = cart.filter((product) => product.id !== id )
        setCart(productFilter)
    }

    
    return(
        <CartContext.Provider value={{cart, addToCart, clearItems, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}