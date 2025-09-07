import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-4 py-4">
        {/* Mobile / Desktop Top Row */}
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo + Text */}
          <div className="flex items-center gap-2">
            <img src="/icons/logo.png" alt="logo" className="w-14 h-8" />
            <h1 className="text-2xl md:text-3xl font-bold text-black-500 tracking-tight whitespace-nowrap font-[Noto_Serif_Display]">
              WOW Burger
            </h1>
          </div>

          {/* Right: Hamburger menu (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-orange-500 hover:bg-orange-500"
          >
            {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>

          {/* Desktop Navigation + Buttons */}
          <div className="hidden md:flex items-center justify-between w-full ml-10">
            <ul className="flex gap-6 items-center">
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <Link to="/about">About</Link>
              </li>

              {/* Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 hover:text-orange-500 cursor-pointer"
                >
                  Pages
                  <ChevronDown
                    className={`ml-1 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>

                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded mt-1 w-40 flex flex-col">
                    <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                      <Link to="/pages/page1">Page 1</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                      <Link to="/pages/page2">Page 2</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                      <Link to="/pages/page3">Page 3</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="hover:text-orange-500 cursor-pointer">
                Count(<span className="text-yellow-500">{count}</span>)
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-4 ml-10">
              <button className="h-10 px-4 rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                Order Online
              </button>
              <button className="h-11 px-5 text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                Book Table
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg origin-top transform transition-transform duration-300 md:hidden ${
            isOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <ul className="flex flex-col gap-6 text-center mt-4 text-lg font-medium p-4 text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <Link to="/pages">Pages</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
