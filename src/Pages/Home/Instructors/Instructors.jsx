import { Zoom } from "react-awesome-reveal";


const Instructors = ({instuctor}) => {
    const {email, instructor, instructorImage } = instuctor
    return (
     <Zoom>
           <div className="pt-4 shadow-xl card w-96 bg-base-100">
  <figure><img src={instructorImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{instructor}</h2>
    <p>{email}</p>
  </div>
</div>
     </Zoom>
    );
};

export default Instructors;