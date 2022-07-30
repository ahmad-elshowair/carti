import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/carti' exact element={<Home/>}/>
        <Route path='/cart-page' exact element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
