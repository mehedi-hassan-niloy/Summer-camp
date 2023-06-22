import { Flip, JackInTheBox } from "react-awesome-reveal";


const PopularInstrucors = ({data}) => {
    const { name, instructorImage, instructor, availableSeats, totalStudents, price} = data
    return (
        <div>
     
     <div className="shadow-xl card w-96 bg-base-100">
     <Flip><figure><img src={instructorImage} alt="Shoes" /></figure></Flip>
            <div className="card-body">
                <h2 className="card-title">Class Name : {name}</h2>
                <h2 className="card-title"> Class teken by {instructor}</h2>
                <JackInTheBox>
                <div className="flex">
                <p>Total Enrol : {totalStudents}</p>
                <p>Available Seats : {availableSeats}</p>
                </div>
                <p>Price : ${price}</p>
                </JackInTheBox>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Instructor</button>
                </div>
            </div>
        </div>
     
    </div>
    );
};

export default PopularInstrucors;