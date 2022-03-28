import React, { useState, useContext, useRef} from "react";
import { CartContext } from "../../context/CartContext";
import Togglable from '../Togglable/Togglable';
import ContactForm from '../ContactForm/ContactForm';
import { useNotificationServices } from "../../Services/notification/NotificationServices";
import "./Cart.css";
import { Link } from "react-router-dom";
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from "firebase/firestore";
import { firestoreDatabase } from "../../Services/firebase/firebase";


const Cart = () => {
    const {cart, removeProduct, clearItems, getTotal} = useContext(CartContext);
    const contactFormRef = useRef()
    const [processingOrder, setProcessingOrder] = useState(false)
    const [orderFinished, setOrderFinished] = useState(false);
    const [codeNumberOrder, setCodeNumberOrder] = useState("");

    const setNotification = useNotificationServices()           

    const [contact, setContact]= useState({
        name: "",
        phone: "",
        address: "",
        comment: "",
    });
  
    
    
    const confirmOrder = () => {
         if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
             setProcessingOrder(true)
        
        const objOrder = {
                buyer: contact,
                items: cart,
                total : getTotal(),
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(firestoreDatabase);
            const outOfStock = [];
            const ids = objOrder.items.map(i => i.id)
            
            getDocs(query(collection(firestoreDatabase, 'products'),where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                        } 
                        else 
                        {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoreDatabase, 'orders'), objOrder).then(({id}) => { 
                            batch.commit()
                            clearItems()
                            setNotification('success', `La orden se genero exitosamente`)                               
                            setOrderFinished(true);  
                            setCodeNumberOrder(id);                                                          
                        })
                    } 
                    else 
                        {
                        outOfStock.forEach(prod => {
                            setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                            clearItems(prod.id)
                        })    
                    }               
                }).catch((error) => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            
        } 
        else 
        {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }
        
    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }        


    if (cart.length === 0 && orderFinished === false) {
        return  <> 
                    <div className="sin-productos">Tu carrito está vacío 😞</div>
                    <Link to="/"><button className="volver-inicio">VOLVER A HOME</button></Link> 
                </>
    }   
    else if (orderFinished === true) {
       return  <div>
                    <h2 style={{color:"white"}}>Su número de orden es:</h2>
                    {codeNumberOrder !== "" && (
                    <h3 style={{color:"white"}}>{codeNumberOrder}</h3>
                    )}
                    <Link to="/"><button className="volver-inicio">VOLVER A HOME</button></Link> 
                </div>
    } 


    return (
        <div>
            <div className="cart">Carrito</div>                                       
                <div className="carrito">                    
                    {cart.map((movie) => (
                        <div key={movie.id}>
                            <li> {movie.quantity} "{movie.name}" ${movie.price}                                                         
                                <button className="eliminar-producto" onClick={() => removeProduct(movie.id)}>X</button>
                            </li>
                        </div>
                    ))} 
                    <div className="total">TOTAL: ${getTotal()}</div>                    
                    <button className="vaciar-carrito" onClick={() => clearItems()}>VACIAR CARRITO</button>
                    <button className="finalizar-compra" onClick={() => confirmOrder()}>CONFIRMAR COMPRA</button>                             
                    {(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&                
                        <div>
                            <h4>Nombre: {contact.name}</h4>
                            <h4>Telefono: {contact.phone}</h4>
                            <h4>Direccion: {contact.address}</h4>
                            <h4>Comentario: {contact.comment}</h4>
                            <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                                    className='boton-contacto' 
                                    style={{backgroundColor: '#db4025'}}>
                                Eliminar datos de contacto
                            </button>
                        </div>}
                </div>

            <Togglable buttonLabelShow={
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') ? 
                    'Editar contacto' : 'Formulario'
                } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>                  
        </div>
    )
}
export default Cart