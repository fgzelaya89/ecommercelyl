
import './App.css'
import Layout from './view/Layout';
//Practica Context
import {CartProvider} from '../src/Context/cartContext'

function App() {
  return (<div>
    <CartProvider>
    <Layout/>
    </CartProvider>
  </div>);
}

export default App
