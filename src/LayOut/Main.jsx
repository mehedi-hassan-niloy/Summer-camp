import { Outlet } from "react-router-dom";
import NavBars from "../Shared/NavBars/NavBars";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBars></NavBars>
            <Outlet/>  
            <Footer></Footer>          
        </div>
    );
};

export default Main;