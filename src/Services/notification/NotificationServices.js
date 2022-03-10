import "./NotificationServices.css"
import { useState, createContext } from "react";
import { useContext } from "react/cjs/react.production.min";

const Notification = ({message, severity}) => {

    const notificationStyles = {
        position: "absolute",
        top: 80,
        right: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',        
        padding: '10px 20px 10px 20px',
        color: 'white',
        borderRadius: '10px' 
    }

    const config = true ?
    {
        style: notificationStyles,
        className: severity === 'success' ? 'Success' : 'Error'
    } : {}

    if(message === ""){
        return null
    }

    return (
        <div {...config}>
            {message}
        </div>
    )
}


const NotificationContext = createContext();

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState("")
    const [severity, setSeverity] = useState("")
    
    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage("")
        }, 2000)
    }

    return(
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
    
}
export const useNotificationServices = () => {
    return useContext(NotificationContext)
}