import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
            <Home 
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path='/cart' element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
