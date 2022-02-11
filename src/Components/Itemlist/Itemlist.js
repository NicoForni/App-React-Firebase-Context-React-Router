
import Item from "../Item/Item";
import "./Itemlist.css";


const Itemlist = ({products}) => {
    return (
        <div className="contenedor-columna"> 
        {products.map((movie) => (
            <Item key={movie.id} movie={movie}/>
        ))}                
       </div>
    )
}

export default Itemlist;