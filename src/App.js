import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Itemlistcontainer from './Components/ItemListContainer/Itemlistcontainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Itemlistcontainer greeting={"hola mundo"}/>
    </div>
  );
}

export default App;
