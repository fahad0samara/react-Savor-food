

import DarkModeToggle from './hooks/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from './Router/Router';


function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
    className={` ${
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >

    <DarkModeToggle />
    <ToastContainer />

    <Router />
   
  

    </div>
   
  )
}

export default App
