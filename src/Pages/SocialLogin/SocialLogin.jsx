import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { savedUser } from "../../api/auth";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handelGoogleSignIn =() =>{
        googleSignIn()
        .then(result => {
           
            const loggedInUsers = result.user;
            savedUser(result.user)
           
        })
    }
    return (
        <div>
        <div className="text-orange-600 divider">OR</div>
        <div className="w-full my-4 text-center">
            <button onClick={handelGoogleSignIn} className="w-16 h-16 text-xs text-orange-600 btn btn-circle btn-outline">
             Googole
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;