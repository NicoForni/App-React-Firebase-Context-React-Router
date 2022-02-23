import "./Itemcount.css";
import React, {useState} from "react";

const Itemcount = ({stock,initial,onAdd}) => {
    
    const [count,setCount] = useState(initial)
    
    const decrement = () => {
        if (count > 0) {
        setCount(count - 1)
        }
    };

    const increment = () => {
        if (count < stock) 
        {
        setCount(count + 1)
        }
    };

    return(
        <div className="contenedor-contador">
            <div className="contenedor-botones">                
                <button className="boton-contador" onClick={decrement}>-</button>            
                <div className="cantidad">CANTIDAD: {count}</div>
                <button className="boton-contador" onClick={increment}>+</button>
            </div>                
                <button className="boton-agregar" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    );
};

export default Itemcount;