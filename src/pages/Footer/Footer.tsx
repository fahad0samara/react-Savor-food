import { Link } from "react-router-dom";
import image from "../../assets/Savor.svg";
const Footer = () => {
  return (
    <div>
        

        <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold ">How It Works</h2>
        <p className="mt-2 ">Discover how our platform helps you explore, experiment, and connect with the world of food.</p>
    </div>
    <div className="relative wrap overflow-hidden">
        <div className="border-2-2 absolute border-opacity-20 border-green-700 h-full border left-1/2"></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-800 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-green-100 text-xl">Discover New Recipes</h3>
                <p className="text-green-100 leading-tight">Explore our curated collection of delicious recipes from around the world.</p>
            </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-800 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div className="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-green-100 text-xl">Try New Ingredients</h3>
                <p className="text-green-100 leading-tight">Experiment with fresh and unique ingredients to elevate your cooking experience.</p>
            </div>
        </div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-800 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-green-100 text-xl">Share Your Creations</h3>
                <p className="text-green-100 leading-tight">Connect with other food enthusiasts and share your own culinary masterpieces.</p>
            </div>
        </div>
    </div>
</div>


      <div className="mx-auto my-10 max-w-screen-xl rounded-3xl border border-green-500 px-4 py-20">
        <h2 className="text-center text-4xl font-bold sm:text-5xl">
          Get our free e-cookbook
        </h2>
        <p className="mt-8 text-center text-3xl font-light">
          Available in PDF, ePub & mobi
        </p>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col border-green-500 sm:flex-row sm:rounded-full sm:border">
          <input
            className="m-2 h-12 rounded-full px-4 text-green-500 ring ring-green-500 sm:w-full sm:ring-0 focus:outline-none focus:ring"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
          <button className="shrink-0 m-2 rounded-full bg-green-500 px-8 py-3 font-medium text-white focus:bg-green-500 focus:outline-none hover:bg-red-700">
            Get Now
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <label className="mb-4 flex items-center t" htmlFor="">
            <input
              className="accent-green-500 mr-3 h-5 w-5"
              type="checkbox"
              name=""
            />
            <span>
              I agree to SavorAPI{" "}
              <Link className="font-medium text-green-500" to="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="font-medium text-green-500" to="/terms-of-use">
                Terms of Use
              </Link>
            </span>
          </label>
        </div>
      </div>

      <footer className="relative mt-20 bg-green-500 px-4 pt-10">
        <div className="absolute -top-10 bg-white left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-green-500  p-2">
          <img className="h-full object-contain" 
            src={image}
            alt="SavorAPI Logo"
           />
        </div>
        <nav
          aria-label="Footer Navigation"
          className="mx-auto  flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link to="/" className="font-medium text-white">
            Home
          </Link>
          <Link to="/menu" className="font-medium text-white">
            Menu
          </Link>
          <Link
            to="/about"
            className="font-medium text-white"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="font-medium text-white"
          >
            Contact Us
          </Link>
        </nav>
        <p className="py-10 text-center text-white">
          © 2024 SavorAPI | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
