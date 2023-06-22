import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstructor";
import { FaHouzz, FaSchool, FaUsers } from 'react-icons/fa';
import { FcAddDatabase } from "react-icons/fc";
import { BiSelectMultiple } from "react-icons/bi";
import { MdPayment } from "react-icons/md";


const Dashboard = () => {
    //  const isAdmin =true 
  const [isAdmin] = UseAdmin();
     const [isInstructor] = UseInstructor()  
    //  const isInstructor = true
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col pt-5 ps-5 drawer-content">
                <Outlet />
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="h-full p-4 mt-20 menu w-80 bg-base-200 text-base-content">
                    {
                        isAdmin ? (<>
                            <li><Link className="text-xl" to='/dasboard/mangeuser'>Manage Users<FaUsers className="text-orange-600"></FaUsers></Link></li>
                            <li><Link className="text-xl" to= '/dasboard/mangeclass'>Manage Classes<FaHouzz className="text-orange-600"></FaHouzz > </Link></li>
                        </> ): isInstructor? (<>
                        <li><Link className="text-xl" to='/dasboard/addclass'>Add Class <FcAddDatabase className="text-orange-600"></FcAddDatabase> </Link></li>
                            <li><Link to="/dasboard/myclass" className="text-xl"> My Classes<FaSchool className="text-orange-600"></FaSchool> </Link> </li>
                        </>):
                        (<>
                        <li><Link className="text-xl" to='/dasboard/myclasses'>My seleted class <BiSelectMultiple className="text-orange-600"></BiSelectMultiple></Link></li>
                            <li><Link className="text-xl" to='/dasboard/myenrollclass'>My Enroll Class <FaHouzz className="text-orange-600"></FaHouzz ></Link></li>
                            <li><Link className="text-xl" to='/dasboard/Paymenthistory'>Payment History <MdPayment className="text-orange-600"></MdPayment></Link></li>
                        </>)
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;