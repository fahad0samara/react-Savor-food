

import DarkModeToggle from './hooks/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';

import {ToastContainer} from "react-toastify";

import Router from './Router/Router';
import LanguageToggle from './hooks/LanguageToggle';
import AllProductsNoPagination from './Menu/AllProductsNoPagination';
import Hero from './Home/Hero';
import FoodAppSection from './pages/FoodAppSection';


function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
    className={` ${
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <DarkModeToggle />

    <Router />
   
  

    </div>
   
  )
}

export default App
