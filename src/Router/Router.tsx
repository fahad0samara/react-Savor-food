import {Route, Routes} from "react-router-dom";
import Contant from "../pages/Contant";
import Home from "../pages/Home/Home";
import AllProductsNoPagination from "../pages/Menu/AllProductsNoPagination";
import CartPage from "../pages/cart/CartPage";
import Login from "../auth/Login";






const Router = () => {
  return (
   
   <Routes>
      <Route path="/Login" element={<Login />} />
    <Route path="/" element={<Home />} />
 
    <Route path="/Contant" element={<Contant />} />
    <Route path="/menu" element={<AllProductsNoPagination />} />
    <Route path="/CartPage" element={<CartPage />} />
    




            </Routes>
  
  );
};

export default Router;
