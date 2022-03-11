import React, { useState, useContext, useRef} from "react";
import { CartContext } from "../../context/CartContext";
import Togglable from '../Togglable/Togglable';
import ContactForm from '../ContactForm/ContactForm';
import { useNotificationServices } from "../../services/notification/NotificationServices";
import "./Cart.css";
import { Link } from "react-router-dom";
import { writeBatch, Timestamp, getDoc, doc, collection, addDoc } from "firebase/firestore";
import { firestoreDatabase } from "../../services/firebase/firebase";


const Cart = () => {
    const {cart, removeProduct, clearItems, getTotal} = useContext(CartContext);
    const contactFormRef = useRef()
    const [processingOrder, setProcessingOrder] = useState(false)
    const setNotification = useNotificationServices()
    
    const [contact, setContact]= useState({
        name: "",
        phone: "",
        address: "",
        comment: "",
    });


    if (cart.length === 0) {
        return  <> 
                    <div className="sin-productos">Tu carrito está vacío 😞</div>
                    <Link to="/"><button className="volver-inicio">VOLVER A HOME</button></Link> 
                </>
    }

    
    
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
            
            const executeOrder = () => {
                if(outOfStock.length === 0) {
                    addDoc(collection(firestoreDatabase, 'orders'), objOrder).then(({id}) => {
                        batch.commit().then(() => {
                            clearItems()
                            setNotification('success', `Su numero de orden es: ${id}`)
                        })
                    }).catch(error => {
                        setNotification('error', error)
                    }).finally(() => {
                        setProcessingOrder(false)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                        removeProduct(prod.id)
                    })          
                }
            }

            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDatabase, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoreDatabase, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: response.id, ...response.data()})    
                    }
                }).catch((error) => {
                    setNotification('error', error)
                }).then(() => {
                    executeOrder()
                }).finally(() => {
                    setProcessingOrder(false)
                })
            })
            
        } else {
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }
        
    
    
    
        if(processingOrder) {
            return <h1>Se esta procesando su orden</h1>
        }
    
    return (
        <div>
            <div className="cart">Carrito</div>
                <div className="carrito">
                    {cart.map((movie) => (
                        <div key={movie.id}>
                            <li> {movie.quantity} "{movie.name}" ${movie.price}                                                         
                                <button className="eliminar-producto" onClick={() => removeProduct(movie.id)}>
                                    X
                                </button>
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
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>                  
        </div>
    )
}
export default Cart