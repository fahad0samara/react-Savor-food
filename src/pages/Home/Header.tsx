import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { useDarkMode } from "../../hooks/useDarkMode";
import log from "../../assets/Savor.svg";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isDarkMode = useDarkMode();

  // State to track the scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-screen  top-0  left-0 right-0  z-10 flex  flex-col overflow-hidden px-12 py-1   md:flex-row md:items-center transition-all ${
        isDarkMode ? "bg-black shadow-md" : "bg-white shadow-md"
      } ${isScrolled && "bg-opacity-90"} ${isDarkMode && "text-white"} ${
        isDarkMode && isScrolled && "bg-opacity-90"
      } ${isDarkMode && isScrolled && "bg-black"}`}
    >
      <Link
        to="/"
        className="flex cursor-pointer items-center whitespace-nowrap text-3xl font-black"
      >
        <img src={log} alt="logo" className="h-12 w-12" />
        SavorFood
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-7 cursor-pointer md:hidden"
        htmlFor="navbar-open"
      >
        <span className="sr-only">Toggle Navigation</span>
        <AiOutlineMenu className="text-2xl" />
      </label>
      <nav
        aria-label="Header Navigation"
        className={
          "flex max-h-0 w-full flex-col  items-center justify-between overflow-hidden transition-all peer-checked:mt-8  peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
        }
      >
        <ul className="flex flex-col mt-5 items-center space-y-4 md:ml-auto md:flex-row md:space-y-0 mb-4">
          <li className="font-bold md:mr-12">
            <Link
              to="/"
              className="text-green-500  hover:text-green-400 font-black"
            >
              Home
            </Link>
          </li>
          <li className="md:mr-12">
            <Link to="/menu" className="text-green-500 hover:text-green-400">
              Menu
            </Link>
          </li>

      


    
            <li className="md:mr-12 flex items-start">
              <Link to="/CartPage" className="text-green-500 hover:text-green-400">
                <span className="ml-1">
                  <FiShoppingCart className="inline-block text-2xl md:text-2xl" />
                </span>
                {cartItems.length > 0 && (
                  <span
                    className="
                    inline-block
                    text-xs
                    md:text-sm
                    bg-green-500
                    text-white
                    rounded-full
                    px-2
                    py-1
                    ml-1
                  
                    "
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
     


          <>
            <li className="md:mr-12 ">
              <Link
                to="/Login"
                className="rounded-full border-2 font-black border-green-500 px-6 py-1   transition-colors hover:bg-green-500 "
              >
                Login
              </Link>
            </li>
          </>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
