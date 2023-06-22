import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PaymentsHistorys from "./PaymentsHistorys";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [payments, setPayment] = useState([])
    useEffect(() => {
        fetch(` https://sports-camp-server-eta.vercel.app/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>{
                setPayment(data)
                })
            
    }, [])
    return (
        <div>
           <div className="pt-20 text-center">
            
                <h1 className="text-3xl text-orange-600">Payment <span className="text-orange-400">History</span></h1>
            </div>
            <div className="text-orange-600 divider"></div>
             {payments.map(payment=><PaymentsHistorys
           key={payment._id}
           payment={payment}
           />)}
        </div>
    );
};

export default PaymentHistory;