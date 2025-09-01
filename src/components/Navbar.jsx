import { Link } from "react-router-dom";
import NavSocial from "./navSocial.jsx";

export default function Navbar(){
    return(
        <header>
        <NavSocial/>
       <nav className="flex justify-around items-center w-[1600px] h-[89px] bg-white">
            <div className=" flex gap-1  items-center mt-5" >
                <img src="/icons/chef.png" alt="logo" className="w-20 h-15 border rounded-full border-pink-300" />
                <p className="courgette text-2xl">Bistro Bils</p>
            </div>
            
       
            <ul className=" flex gap-5 justify-center items-center mt-5">
                <button className=" h-7 w-15 border rounded-full border-amber-300"><Link to="/">Home</Link></button>
                <button className=" h-7 w-16 border rounded-full border-amber-300"><Link to="/about">About</Link></button>
                <button className=" h-7 w-15 border rounded-full border-amber-300"><Link to="/menu">Menu</Link></button>
                <button className=" h-7 w-17 border rounded-full border-amber-300"><Link to="/contact">Contact</Link></button>
            </ul>

            <button className=" h-8 w-22 border rounded-full border-amber-300 mt-5">Book table</button>
    
        </nav>
      
       </header>
    )
}