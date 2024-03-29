import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import API_URL from '../../apiConfig';
import Loader from '../../loder/Loder';
import { addItemToCart } from '../../redux/cart/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { RootState } from '../../redux/store';


 export interface ProductItem {
  [x: string]: any;
  _id: string;
  name: string;
  categories: { name: string }[];
  isNewProduct: boolean;
  image: string;
  allergens: string[];
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  calories: number;
  servingSize: string;
  stockQuantity: number;
}

const AllProductsNoPagination: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  

  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Salad");
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);

  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductItem[]>(`${API_URL}/products/all`);
        setProducts(response.data);
        const uniqueCategories = Array.from(new Set(response.data.flatMap(product => product.categories.map(category => category.name))));
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(product => product.categories.some(category => category.name === selectedCategory));
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [selectedCategory, products]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };


  const handleAddToCart = (item: ProductItem) => {
    dispatch(
      addItemToCart({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        Calories: item.calories,
        ServingSize: item.servingSize,
      })
    );
  
    // Ensure toast.success is called
    toast.success("Item added to the cart", {
      
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <Loader />
      ) : (
        <>
<div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 py-2">
  <button
    onClick={() => history.back()}
    className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
  >
    Back
  </button>
  <li className="flex items-center ml-auto">
    <Link to="/CartPage" className="flex items-center text-green-500 hover:text-green-400">
      <span className="ml-1">
        <FiShoppingCart className="text-2xl" />
      </span>
      {cartItems.length > 0 && (
        <span className="inline-block bg-green-500 text-white rounded-full px-2 py-1 ml-1 text-xs md:text-sm">
          {cartItems.length}
        </span>
      )}
    </Link>
  </li>
</div>


         
          <p className="text-lg text-center text-gray-800 mb-8">Browse through our delicious selection of categories below:</p>
      
          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2  rounded-md focus:outline-none ${selectedCategory === category ? 'bg-green-100 hover:bg-green-50 text-black' : 'bg-green-500 hover:bg-green-600'}`}
                style={{ minWidth: '120px' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products for selected category */}
          {selectedCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product._id} className="border border-gray-300 rounded-md overflow-hidden bg-white shadow-lg transition duration-500 transform hover:-translate-y-2 relative">
                  {product.isNewProduct && (
                    <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 uppercase text-xs font-bold rounded-bl-md">New</span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <div>
                      <h2 className="text-lg font-semibold mb-2 text-black flex justify-between items-center">
                        {product.name}
                        {/* Displaying allergens if present */}
                        {product.allergens.length > 0 && product.allergens[0] !== 'None' && (
                          <div className="text-red-500 bg-red-100 py-1 px-2 rounded-md">
                            Allergens: {product.allergens.join(', ')}
                          </div>
                        )}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      {product.discountPercentage > 0 && (
                        <p className="text-green-500 font-semibold">
                          ${product.price} <span className="line-through text-gray-500">${product.originalPrice}</span>
                        </p>
                      )}
                      {!product.discountPercentage && (
                        <p className="text-gray-800">${product.price}</p>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">Calories: {product.calories}</p>
                    <p className="text-gray-700 mb-2">Serving Size: {product.servingSize}</p>
                    <p className="text-gray-700 mb-4">Stock Quantity: {product.stockQuantity}</p>
                    <button onClick={() => handleAddToCart(product)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllProductsNoPagination;
