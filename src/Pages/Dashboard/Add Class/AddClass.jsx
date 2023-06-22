
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const AddClass = () => {
    const { user } = useContext(AuthContext)
 


    const classUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const image = form.image.value
        const instructor= user?.displayName
        const  instructorImage = user?.photoURL
        const email= user?.email
        const price = parseFloat(form.price.value)
        const availableSeats = parseFloat(form.availableSeats.value)

        const uploadData = {
            name,
            instructor,
            image,
            email,
            instructorImage,
            price,
            availableSeats,
            status: "Pending",
            totalStudents: 0
        }
        

        fetch(" https://sports-camp-server-eta.vercel.app/classes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(uploadData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire('Class Added Successfully')
                    
                }
            })


    }
    return (
        <div className="pt-20">
            <form onSubmit={classUpload}>
                <div className="w-full mb-4 form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Class Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Class Name"
                        className="w-full input input-bordered"
                    />
                </div>
                <div className="w-full mb-4 form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="instructor" defaultValue={user?.displayName}  placeholder="Instructor Name"
                        className="w-full input input-bordered"
                    />
                </div>
                <div className="flex my-4">

                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Instructor Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Instructor email"
                            className="w-full input input-bordered"
                        />
                    </div>
                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price"
                            className="w-full input input-bordered"
                        />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Instructor Image</span>
                        </label>
                        <input type="text" name="instructorImage" defaultValue={user?.photoURL} placeholder="Instructor Image"
                            className="w-full my-4 input input-bordered"
                        />
                    </div>

                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Class Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Class Image"
                            className="w-full my-4 input input-bordered" />
                    </div>
                </div>
                <div className="w-full ml-4 form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Available seats</span>
                    </label>
                    <input type="number" name="availableSeats" placeholder="Available seats"
                        className="w-full input input-bordered"
                    />
                </div>
                <input className="mt-4 text-white bg-orange-600 btn btn-sm" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;