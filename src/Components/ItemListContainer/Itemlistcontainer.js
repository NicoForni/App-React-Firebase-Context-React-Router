import "./itemlistcontainer.css";
import Itemcount from "../Itemcount/Itemcount";

const Itemlistcontainer = ({greeting}) => {

    const onAdd = (count) => {
        
        count > 0 ? console.log(`Agrego ${count} items al carrito`) : console.log(`No agrego nada!`);
    }
    
    return(    
        <>
        <h1>{greeting}</h1>  
        <Itemcount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}

export default Itemlistcontainer;