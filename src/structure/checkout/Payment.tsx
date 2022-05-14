import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import styles from "./Payment.module.css";

const Payment = () => {
  // Hooks for Card element and Stripe
  const elements = useElements();
  const stripe = useStripe();

  const handleCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const paymentEl = elements.getElement(CardElement);
    console.log("card", paymentEl);
    console.log("stripe", stripe);

    // // confirm payment, redirect checkout, etc.

    // // Refer to card element
  };

  return (
    <form action="" onSubmit={handleCard}>
      <CardElement />
    </form>
  );
};

export default Payment;
