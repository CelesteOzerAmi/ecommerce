import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={< ItemListContainer bienvenida="mike" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer bienvenida="mike" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer  bienvenida="mike" />} />
          <Route path="/cart" element={<Cart titulo="tu carrito" />} />
          <Route path="/checkout" element={<Checkout bienvenida="mike" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App