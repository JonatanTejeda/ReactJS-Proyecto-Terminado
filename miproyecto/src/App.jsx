import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./Stylenav.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Formulario from "./components/Formulario";
import { CartProvider } from "./Provider/CartProvider";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:category"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Formulario />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
