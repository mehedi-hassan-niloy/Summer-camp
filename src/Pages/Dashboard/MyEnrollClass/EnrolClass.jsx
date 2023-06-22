

const EnrolClass = ({enrol}) => {
     const {classNames} = enrol
    return (
        <div
        className="pt-20">
        <div className="shadow-xl card card-side bg-base-100">

            <img src={classNames.image} alt="Movie" className="w-1/4" />
            <div className=" card-body">
                <div className="flex justify-between">
                    <div>
                        <h2 className="card-title">Class : {classNames.name}</h2>
                        <h2 className="card-title">Instructor : {classNames.instructor}</h2>
                    </div>
                    <div>
                        <p>Total Student</p>
                        <p>Price : {classNames.price}</p>
                        <p>Available Seats : {classNames.availableSeats}</p>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
           
        
    );
};

export default EnrolClass;