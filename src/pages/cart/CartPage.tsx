import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store'; // Import RootState type
import { removeItemFromCart } from '../../redux/cart/cartSlice';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItemFromCart(itemId)); 
  };

  return (
    <div className="container mx-auto">
      <div className="sm:flex shadow-md ">
        <div className="w-full sm:w-3/4  px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              {/* Render cart item details */}
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src={item.image} alt={item.name} className="h-full object-center object-cover md:block hidden" />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{item.id}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
                  <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                    {/* Render quantity options */}
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  {/* Render serving size */}
                  Serving Size: {item.ServingSize}
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">
                  {/* Render calories */}
                  Calories: {item.Calories}
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                    {/* Add button to remove item */}
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => handleRemoveItem(item.id)}>Remove</p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
          <Link to="/menu" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          {/* Render order summary */}
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
            <span className="font-semibold text-sm">Total</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              {/* Render total cost */}
              <span>Total cost</span>
              <span>{calculateTotalCost()}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
