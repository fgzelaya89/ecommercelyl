
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import MediaCard from './components/MediaCard/MediaCard';
import NavBar from './components/NavBar/NavBar';
import ProducContainer from './components/ProducContainer/ProducContainer';

function App() {
  return (<div>
    <NavBar />
    <ItemListContainer greeting="Bienvenidos" />
    <ProducContainer END_POINT ='https://fakestoreapi.com/products'/>

  </div>);
}

export default App
