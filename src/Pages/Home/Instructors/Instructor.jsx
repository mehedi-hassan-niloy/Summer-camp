import { useEffect, useState } from "react";
import Instructors from "./Instructors";
import UseClass from "../../../Hooks/UseClass";


const Instructor = () => {
    const [classes] = UseClass()
    return (
        <div className="grid p-8 pt-20 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-3">
            {
                classes.map(instuctor =><Instructors
                  key={instuctor._id}
                  instuctor={instuctor}
                />)
            } 
        </div>
    );
};

export default Instructor;