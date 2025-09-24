import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
//import Prac from "./components/Prac.jsx";

import BreakfastItems from "./category/Breakfast";
import MainDishItems from "./category/MainDish";
import DrinksItems from "./category/Drinks";
import DessertItems from "./category/Dessert";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/category/breakfast" element={<BreakfastItems />} />
        <Route path="/category/maindish" element={<MainDishItems />} />
        <Route path="/category/drinks" element={<DrinksItems />} />
        <Route path="/category/dessert" element={<DessertItems />} />
      </Routes>
      </main>
      
      
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