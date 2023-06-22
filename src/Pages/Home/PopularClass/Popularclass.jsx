import { Bounce, Fade, Zoom } from "react-awesome-reveal";


const Popularclass = ({ data }) => {
    const { name, image, instructor, availableSeats, totalStudents, price } = data
    return (
        
            <div>

                <div className="shadow-xl card w-96 bg-base-100">
                    <Zoom><figure><img className="h-60" src={image} alt="Shoes" /></figure></Zoom>
                    <div className="card-body">
                        <Fade>
                            <h2 className="card-title">Class Name : {name}</h2>
                            <h2 className="card-title"> Class teken by {instructor}</h2>
                            <div className="flex">
                                <p>Total Student : {totalStudents}</p>
                                <p>Available Seats : {availableSeats}</p>
                            </div>
                            <p>Price : ${price}</p>
                        </Fade>
                        <div className="justify-end card-actions">
                            <div className="justify-end card-actions">
                                <button className="mt-4 bg-orange-400 border-0 border-b-4 border-orange-600 btn btn-outline">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

    );
};

export default Popularclass;