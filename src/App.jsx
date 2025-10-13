import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
//import Prac from "./components/Prac.jsx";

import BreakfastItems from "./category/Breakfast";
import MainDishItems from "./category/MainDish";
import DrinksItems from "./category/Drinks";
import DessertItems from "./category/Dessert";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

   // Add item to cart
   const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

   // Remove item from cart
   const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <>
      <Navbar setCartOpen={setCartOpen} cartItems={cartItems} />

      <main className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/category/breakfast" element={<BreakfastItems />} />
        <Route path="/category/maindish" element={<MainDishItems />} />
        <Route path="/category/drinks" element={<DrinksItems />} />
        <Route path="/category/dessert" element={<DessertItems />} />
      </Routes>
      </main>
      
       {/* Cart Slide-over */}
      {cartOpen && (
        <>
          {/* Background Blur Overlay */}
          <div
            onClick={() => setCartOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)",
              zIndex: 900,
            }}
          ></div>

          {/* Cart Panel */}
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            closeCart={() => setCartOpen(false)}
          />
        </>
      )}
    </>
   
  );
}
/* <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
    </>*/