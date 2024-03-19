

  
  import {useState, useEffect, useRef} from "react";
  import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
  import {Link} from "react-router-dom";
  
  
  import axios from "axios";
  import {toast} from "react-toastify";


  import {useDispatch} from "react-redux";
  import SVGComponent2 from "../../icons/SVGComponent2";
import { AppDispatch } from "../../redux/store";
import API_URL from "../../apiConfig";
import { addItemToCart } from "../../redux/cart/cartSlice";
import { ProductItem } from "../Menu/AllProductsNoPagination";
  
  const Product = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState<number>(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);
  
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [slidesToShow, setSlidesToShow] = useState(4);
  
    const [menuItems, setMenuItems] = useState([]);
    
    const handleAddToCart = (item: ProductItem) => {
      dispatch(addItemToCart({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        Calories: item.calories,
        ServingSize: item.servingSize,
  
  
      }));

      toast.success(" item add to the cart", {
        position: "bottom-center",
        autoClose: 1990,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });

  

      
    };
  
  
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/all`);
       
  
        setMenuItems(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
  
      }
    };
      useEffect(() => {
        fetchMenuItems();
      }, []);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (windowWidth >= 1024) {
        setSlidesToShow(4);
      } else if (windowWidth >= 600) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    }, [windowWidth]);
  
    useEffect(() => {
      const slider = sliderRef.current;
  
      if (slider) {
        const slideElement = slider.querySelector(".slide") as HTMLElement;
  
        if (slideElement) {
          const slideWidth = slideElement.offsetWidth;
          setSlideWidth(slideWidth);
        }
      }
    }, []);
  
    useEffect(() => {
        let interval: number | undefined;
  
      if (isAutoScrolling) {
        interval = setInterval(() => {
          const slider = sliderRef.current;
          const slideElement = slider?.querySelector(".slide") as HTMLElement;
          const slideWidth = slideElement.offsetWidth;
          const totalSlideWidth = slideWidth * menuItems.length;
          const maxScrollLeft = totalSlideWidth - (slider?.offsetWidth || 0);
  
          if (slider && slideElement) {
            if (slider.scrollLeft >= maxScrollLeft) {
              slider.scrollTo({
                left: 0,
                behavior: "smooth",
              });
            } else {
              slider.scrollBy({
                left: slideWidth,
                behavior: "smooth",
              });
            }
          }
        }, 3000);
      }
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, [isAutoScrolling, menuItems]);
  
    const handlePrev = () => {
      const slider = sliderRef.current;
      const slideElement = slider?.querySelector(".slide") as HTMLElement;
      const slideWidth = slideElement.offsetWidth;
      const totalSlideWidth = slideWidth * menuItems.length;
      const maxScrollLeft = totalSlideWidth - (slider?.offsetWidth || 0);
  
      if (slider && slideElement) {
        if (slider.scrollLeft <= 0) {
          slider.scrollTo({
            left: maxScrollLeft,
            behavior: "smooth",
          });
        } else {
          slider.scrollBy({
            left: -slideWidth,
            behavior: "smooth",
          });
        }
      }
  
      setIsAutoScrolling(false);
    };
  
    const handleNext = () => {
      const slider = sliderRef.current;
      const slideElement = slider?.querySelector(".slide") as HTMLElement;
      const slideWidth = slideElement.offsetWidth;
      const totalSlideWidth = slideWidth * menuItems.length;
      const maxScrollLeft = totalSlideWidth - (slider?.offsetWidth || 0);
  
      if (slider && slideElement) {
        if (slider.scrollLeft >= maxScrollLeft) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollBy({
            left: slideWidth,
            behavior: "smooth",
          });
        }
      }
  
      setIsAutoScrolling(false);
    };
  

    const dispatch: AppDispatch = useDispatch();
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-3">
        <div className="mt-4 text-center my-9">
          <p className="italic font-bold text-center mt-9">Browse our amazing products below.</p>
        </div>
  
        <div className="flex justify-between my-9">
          <h1>
            <span className="text-3xl font-medium  mb-4">
              products
            </span>
          </h1>
  
          <Link
            //@ts-ignore
            to="/menu"
            className="underline text-green-500 hover:text-green-600"
          >
            <span className="relative  inline-flex justify-center whitespace-nowrap font-bold mx-2 mt-2">
              <SVGComponent2 />
              See All products
            </span>
          </Link>
        </div>
  
        <div
          ref={sliderRef}
          className="flex overflow-hidden rounded-lg space-x-6"
          style={{scrollSnapType: "x mandatory"}}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {menuItems.map((menuItem: ProductItem) => (
            <div
              key={menuItem.id}
              className={
                "relative py-8 rounded-lg hover:shadow-2xl mx-2 slide transform-gpu"
              }
              style={{
                flex: `0 0 ${100 / slidesToShow}%`,
                scrollSnapAlign: "start",
                minWidth: `${slideWidth}px`,
                maxWidth: "400px",
              }}
            >
              {menuItem.isNewProduct && (
                <div className="absolute top-0 left-0 bg-green-500 px-3 py-1 text-sm text-white font-medium rounded-tr-lg rounded-bl-lg transform -skew-x-12">
                  New
                </div>
              )}
  
              <div className="relative">
                <img
                  src={menuItem.image}
                  alt={menuItem.name}
                  className=" w-48 h-48  object-cover mx-auto rounded-full shadow-lg transform hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4 rounded-lg shadow-md">
                <div className="flex justify-between mx-1">
                  <h3 className="text-lg font-medium  mb-2">{menuItem.name}</h3>
          
                </div>
  
                <p className=" mb-4"> {menuItem.description}</p>
                <div className="flex justify-between">
                  <span className=" font-medium">
                    ${menuItem.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(
                      menuItem
                    )}
                    className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-lg transform -skew-x-12 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-6">
          <button
            className={
              "bg-green-500 hover:bg-green-700 rounded-full px-3 py-2 flex items-center text-white font-medium transition duration-300 transform hover:scale-110 shadow-2xl"
            }
            onClick={handlePrev}
          >
            <FaArrowLeft className="mr-2" />
          </button>
          <button
            className={
              "bg-green-500 hover:bg-green-700 rounded-full px-3 py-2 flex items-center text-white font-medium transition duration-300 transform hover:scale-110 shadow-2xl"
            }
            onClick={handleNext}
          >
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    );
  };
  
  export default Product;
  