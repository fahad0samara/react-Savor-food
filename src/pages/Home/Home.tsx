import Footer from "../Footer/Footer";
import ServiceStatistics from "../ServiceStatistics";
import Header from "./Header";
import Hero from "./Hero";
import Product from "./Product";

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <ServiceStatistics />
            <Product />
            <Footer/>
        </div>
    )
}


export default Home;