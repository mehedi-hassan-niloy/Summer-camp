import About from "../Pages/Home/AboutSection/About";
import Banner from "../Pages/Home/Banner/Banner";
import PopularClasses from "../Pages/Home/PopularClass/PopularClasses";
import PopularInstractor from "../Pages/Home/PopularInstractuor/PopularInstractor";


const Home = () => {
    return (
        <div>
         <Banner/> 
         <PopularClasses/>
         <PopularInstractor/>
         <About/>
        </div>
    );
};

export default Home;