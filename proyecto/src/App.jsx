import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={< ItemListContainer bienvenida=" Bienvenido a Mike ✔" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer bienvenida=" Bienvenido a Mike ✔" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/> 
          <Route path="*" element={<Navigate to="/" />} />  
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App