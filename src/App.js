import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShopPage from "./components/Shop/ShopPage";
import ShoppingCart from "./components/Shop/ShoppingCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cartAmount, setCartAmount] = useState(0);

  const incrementCartAmount = () => {
    setCartAmount(cartAmount + 1);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar cartAmount={cartAmount} setCartAmount={incrementCartAmount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
