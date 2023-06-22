import Swal from "sweetalert2";
import UseClassesCart from "../../Hooks/UseClassesCart";
import { Link } from "react-router-dom";


const MyClasses = () => {
    const [cart, refetch] = UseClassesCart();
   
    
    const handelDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://sports-camp-server-eta.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (

        <div>
            {
                cart.map(classes => <div
                    key={classes._id}
                    className="pt-20">
                    <div className="shadow-xl card card-side bg-base-100">

                        <img src={classes.image} alt="Movie" className="w-1/4" />
                        <div className=" card-body">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="card-title">Class : {classes.name}</h2>
                                    <h2 className="card-title">Instructor : {classes.instructor}</h2>
                                </div>
                                <div>
                                    <p>Total Student</p>
                                    <p>Price : {classes.price}</p>
                                    <p>Available Seats : {classes.availableSeats}</p>
                                </div>
                                <div className=" card-actions">
                                    <button onClick={() => handelDelete(classes)} className="text-white bg-orange-600 btn btn-outline">Delete</button>
                                   <Link to='/dasboard/payment' state={{classId: classes.classId, totalPrice: classes.price}} > <button className="text-white bg-orange-600 btn btn-outline">Pay</button></Link>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>

    );
};

export default MyClasses;