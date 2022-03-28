import { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='ContactContainer'>
          <div>Formulario de contacto</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Nombre:
              <input
                className='InputContact'
                type='text'
                required
                placeholder='Introduce tu nombre'
                title='Solo en minuscula-Maximo 15 caracteres'
                pattern="[a-z]{1,15}"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label className='LabelContact'>Teléfono:
              <input
                className='InputContact'
                type='tel'
                required pattern='[0-9]{8}'
                placeholder='Introduce tu telefono'
                title='Deben ser 8 digitos'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Dirección:
              <input
                className='InputContact'
                type='text'                
                required
                placeholder='Introduce tu direccion'                
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                required
                placeholder='Introduce tu comentario'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <button className='Button-confimar' type='submit'>CONFIRMAR DATOS</button>
          </form>
        </div>
      )
}

export default ContactForm