import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EnrolClass from "./EnrolClass";


const MyEnrollClass = () => {
    const {user} = useContext(AuthContext)
    const [enrols, setEnrol] = useState([])
    useEffect(() => {
        fetch(` https://sports-camp-server-eta.vercel.app/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>{
                setEnrol(data)
                })
            
    }, [])
    return (
        <div>
           {enrols.map(enrol=><EnrolClass
           key={enrol._id}
           enrol={enrol}
           ></EnrolClass>)}
        </div>
    );
};

export default MyEnrollClass;