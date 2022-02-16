import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Itemlistcontainer from './Components/ItemListContainer/Itemlistcontainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Itemlistcontainer greeting={"hola mundo"}/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
