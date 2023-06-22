
import {  useState } from "react";
import UseClass from "../../../Hooks/UseClass";
import Swal from "sweetalert2";




const ManageClasses = () => {
    const [classes] = UseClass()
    const [loading, setLoading]= useState(false)
    const [feedbackId, setFeedbackId] = useState(null)
  

    const handelApprove = id => {
        
        fetch(` https://sports-camp-server-eta.vercel.app/approve/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                if (data.modifiedCount > 0) {
                    Swal.fire('Class Approve')
                }
            })
    }
    const handelDecline = id => {
       
        fetch(`https://sports-camp-server-eta.vercel.app/decline/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setLoading()
                if (data.modifiedCount > 0) {
                    Swal.fire('Class Decline')

                }
            })
    }

    const feedbacksubmit = (event) => {
        event.preventDefault()
        const form = event.target.feedback.value
        const feedback = { feedback: form }
        fetch(` https://sports-camp-server-eta.vercel.app/feedback/${feedbackId}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback Submit succesfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
    }


    return (
        <div className="">
            <div className="text-center mb-7 pt-28 ">
                <h1 className="text-3xl text-orange-600 mb-7">Manage <span className="text-orange-400">Classes</span></h1>
            </div>
            <div className="text-orange-600 divider"></div>

            <div className="grid p-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-2">
                {
                    classes.map(data =>
                        <div key={data._id} className="shadow-xl card w-96 h-5/6 bg-base-100">
                            <figure><img src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class :{data.name} </h2>
                                <h2 className="card-title"> Instructor :{data.instructor} </h2>
                                <div className="flex">
                                    <p>Total Student : </p>
                                    <p>Available Seats :{data.availableSeats} </p>
                                </div>
                                <p>Price :{data.price}</p>
                                <p>{data.status}</p>
                                <div className="flex justify-between">
                                    <div className=" card-actions">
                                        <button onClick={() => handelApprove(data._id, 'approved')}
                                            disabled={data.status !== 'Pending'}
                                            className="text-white btn bg-emerald-900 btn-block btn-xs">Approve</button>
                                    </div>
                                    <div className=" card-actions">
                                        <button onClick={() => handelDecline(data._id, 'approved')}
                                            disabled={data.status !== 'Pending'}
                                            className="text-white bg-red-900 btn btn-block btn-xs">Deny</button>
                                    </div>
                                    <div className=" card-actions">
                                        <button onClick={() => {
                                            window.my_modal_5.showModal()
                                            setFeedbackId(data._id)
                                        }} className="mt-4 bg-orange-400 border-0 border-b-4 border-orange-600 btn btn-sm btn-outline">SendFeedback</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form onSubmit={feedbacksubmit} method="dialog" className="modal-box">
                    <h3 className="text-lg font-bold">Feedback!</h3>
                    <textarea name="feedback" className="textarea textarea-primary w-96" placeholder="Feedback"></textarea>
                    <input type="submit" value="Feedback" className="btn" />
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;