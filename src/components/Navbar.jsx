import { Link } from "react-router-dom";
//import NavSocial from "./navSocial.jsx";
import {useState} from "react";
import {Menu, X} from "lucide-react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header>
        <nav>
        <div className="w-full bg-white shadow-md px-6 py-3 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
      <img src="/icons/logo.png" alt="logo" className="w-14 h-8 md:mr-2" />

        <h1 className="text-xl font-bold text-black-500 mr-80 md:mr-auto">WOW Burger</h1>

        {/* Mobile Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-orange-500 hover:bg-orange-500"
        >
          {isOpen ? <X size={28} color="white"/> : <Menu size={28} color="white"/>}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 mr-96">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Menu</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
        <div className="hidden md:flex gap-5 mr-10 items-center mt-0.5">
  <button className="h-10 px-5 border rounded-full shadow-2xl text-gray-900  hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300">Order Online</button>
  <button className="h-11 px-5 text-white border rounded-full bg-orange-500  hover:scale-105 hover:shadow-xl transition-transform duration-200">Book Table</button>
</div>

      </div>
       {/* Drawer for Mobile */}
      
       <div
  className={`absolute top-full left-0 w-full bg-white shadow-lg origin-top transform transition-transform duration-300 md:hidden ${
    isOpen ? "scale-y-100" : "scale-y-0"
  }`}
>
  <ul className="flex flex-col gap-6 text-center mt-4 mr-96 text-lg font-medium p-4 text-gray-700">
    <li className="hover:text-orange-500 cursor-pointer">Home</li>
    <li className="hover:text-orange-500 cursor-pointer">Menu</li>
    <li className="hover:text-orange-500 cursor-pointer"><Link to="/about">About</Link></li>
    <li className="hover:text-orange-500 cursor-pointer">Contact</li>
  </ul>
</div>

       </div>
 
        </nav>
      
       </header>
    )
}