import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../hooks/useCart";

//TODO : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full">
            <SectionTitle subHeading="please process" heading="payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;