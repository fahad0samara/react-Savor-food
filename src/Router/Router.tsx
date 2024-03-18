import {Route, Routes} from "react-router-dom";
import Contant from "../pages/Contant";
import Home from "../Home/Home";
import AllProductsNoPagination from "../Menu/AllProductsNoPagination";






const Router = () => {
  return (
   
   <Routes>
    <Route path="/" element={<Home />} />
 
    <Route path="/Contant" element={<Contant />} />
    <Route path="/menu" element={<AllProductsNoPagination />} />

    




            </Routes>
  
  );
};

export default Router;
