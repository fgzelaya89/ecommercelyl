
import './App.css'
import Layout from './view/Layout';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Practica Context
import { CartProvider } from '../src/Context/cartContext'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaXZFw4gIbAE2f-MbcuoNw-__TMi7jE78",
  authDomain: "lylecommerce-6628d.firebaseapp.com",
  projectId: "lylecommerce-6628d",
  storageBucket: "lylecommerce-6628d.appspot.com",
  messagingSenderId: "890943385729",
  appId: "1:890943385729:web:eb69ae2116e79f37779d80"
};

initializeApp(firebaseConfig);

function App() {
  return (<div>
    <CartProvider>
      <Layout />
    </CartProvider>

  </div>);
}

export default App
