import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseClass from "../../Hooks/UseClass";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Flip } from "react-awesome-reveal";
import UseAdmin from "../../Hooks/UseAdmin";
import UseInstructor from "../../Hooks/UseInstructor";


const AllClass = ({data}) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const {_id, name, image, instructor, availableSeats, totalStudents, price} = data
    const [ , , refetch] = UseClass()
    const [isAdmin] = UseAdmin()
    const [isInstructor] = UseInstructor()
   
    

    const handelAddTOCart = data => {
        
        
        if (user && user.email) {
            const cartItem = {classId: _id,  name, price, image, instructor, availableSeats, totalStudents, email: user.email}
            fetch(' https://sports-camp-server-eta.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
               
                if (data.insertedId) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Add Class succsesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    else {
        Swal.fire({
            title: 'Please login to Add Class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now'
        }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: { from: location }})
            }
        })
    }
        
    }
    return (
        <div>
               <Flip>
               <div className="shadow-xl card w-96 h-5/6 bg-base-100">
                <figure><img className="h-60" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name : {name}</h2>
                    <h2 className="card-title"> Class teken by {instructor}</h2>
                    <div className="flex">
                    <p>Total Enorl : {totalStudents}</p>
                    <p>Available Seats : {availableSeats}</p>
                    </div>
                    <p>Price : ${price}</p>
                    <div  className="justify-end card-actions">
                        {
                            isAdmin && isInstructor? <> <button onClick={() => handelAddTOCart(data)} disabled className="mt-4 bg-orange-400 border-0 border-b-4 border-orange-600 btn btn-outline">Select</button></>:
                            <>
                             <button onClick={() => handelAddTOCart(data)} className="mt-4 bg-orange-400 border-0 border-b-4 border-orange-600 btn btn-outline">Select</button>
                            </>
                        }
                   
                </div>
                </div>
            </div>
               </Flip>
        </div>
    );
};

export default AllClass;