import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Itemlistcontainer from './Components/ItemListContainer/Itemlistcontainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Components/Cart/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartContextProvider} from "./context/CartContext";
import {NotificationServicesProvider} from "./services/notification/NotificationServices";


function App() {
  return (
    <div className="App">   
    <NotificationServicesProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>          
            <Route path="/" element={<Itemlistcontainer greeting={"Bienvenidos a Clasic's movies"}/>} />
            <Route path="/category/:categoryId" element={<Itemlistcontainer greeting={"Bienvenidos a Clasic's movies"}/>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>  
    </NotificationServicesProvider>     
    </div>
  );
}

export default App;
