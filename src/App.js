import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Itemlistcontainer from './Components/ItemListContainer/Itemlistcontainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>          
          <Route path="/" element={<Itemlistcontainer greeting={"hola mundo"}/>} />
          <Route path="/category/:categoryId" element={<Itemlistcontainer greeting={"hola mundo"}/>} />
          <Route path="/detail/:productId" element={<ItemDetailContainer/>} />           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
