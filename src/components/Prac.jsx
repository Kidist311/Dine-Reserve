/*import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Prac() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-200">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className="mt-2">Mobile Menu Content</div>}
    </nav>
  );
}
*/
import { Link } from "react-router-dom";
//import NavSocial from "./navSocial.jsx";
import {useState} from "react";
import {Menu, X} from "lucide-react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header>
        
       <nav className="w-full bg-white shadow-md px-6 py-3 fixed top-0 left-0 z-50">
            <div className=" flex gap-1  items-center mt-3 mr-5 " >
                <img src="/icons/logo.png" alt="logo" className="w-14 h-8 " />
                <p className=" text-3xl font-bold tracking-tight font-[Noto_Serif_Display]">WOW Burger</p>
            </div>
            
       
            <ul className=" flex gap-5 mr-96 items-center mt-3">
                <button className=" h-7 w-15 text-gray-900 "><Link to="/">Home</Link></button>
                <button className=" h-7 w-16  text-gray-900 "><Link to="/about">About</Link></button>
                <button className=" h-7 w-15 text-gray-900  "><Link to="/menu">Menu</Link></button>
                <button className=" h-7 w-17 text-gray-900 "><Link to="/contact">Contact</Link></button>
            </ul>

            <div className=" flex gap-5 mr-10 items-center mt-1">
            <button className=" h-9 w-30 text-gray-900 border rounded-full border-l-black mt-5">Order Online</button>
            <button className=" h-10 w-25 text-white border rounded-full bg-orange-500 mt-5">Book table</button>
            </div>
        </nav>
      
       </header>
    )
}