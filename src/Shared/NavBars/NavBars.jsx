import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import { useContext } from "react";



const NavBars = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="fixed z-10 max-w-screen-xl text-orange-500 bg-opacity-60 bg-slate-800 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Classes</Link></li>
                        <li><Link>Dashboard</Link></li>
                    </ul>
                </div>
                <a className="text-base normal-case btn btn-ghost">Sports Camp</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 text-2xl menu menu-horizontal">
                    <li><Link>Home</Link></li>
                    <li><Link to='instructor'>Instructors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>

                </ul>
            </div>
            {user ? <>
                <ul className="px-1 text-2xl menu menu-horizontal">
                    <li><Link to='/dasboard'>Dashboard</Link></li>
                </ul>
                <div className=" avatar navbar-end">
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                </div>
                <div className="navbar-end">
                    <ul className="px-1 text-2xl menu">
                        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </ul>
                </div></> : <>
                <div className="navbar-end">
                    <ul className="px-1 text-2xl menu">
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div> </>
            }
        </div>
    );
};

export default NavBars;