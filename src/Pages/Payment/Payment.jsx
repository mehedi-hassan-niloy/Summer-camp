import { loadStripe } from "@stripe/stripe-js";
import UseClassesCart from "../../Hooks/UseClassesCart";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

  const [cart] = UseClassesCart();

  const location = useLocation();
  const classId = location.state?.classId;
  const price = location.state?.totalPrice;

 




  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price} classId={classId}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;