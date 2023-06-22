

const PaymentsHistorys = ({ payment }) => {
    const { email, transactionId, price, date } = payment
    return (
        <div className="mb-12 ">
            <div className="shadow-xl card card-side bg-zinc-400">
                <div className=" card-body">
                    <div className="flex justify-around">
                        <div className="text-white">
                            <p>Email : {email}</p>
                            <p>TransactionId : {transactionId}</p>
                        </div>
                        <div className="text-white">
                            <p>Price : {price}</p>
                            <p>Date : {date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentsHistorys;