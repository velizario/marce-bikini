import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {
  // Hooks for Card element and Stripe
  const elements = useElements();
  const stripe = useStripe();

  const handleCard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    console.log("card", cardElement);
    console.log("stripe", stripe);

    // // confirm payment, redirect checkout, etc.

    // // Refer to card element
  };

  return (
    <form action="" onSubmit={handleCard}>
      <CardElement />
      <Button
        color="secondary"
        variant="contained"
        type="submit"
        sx={{ marginBlock: "1.5rem" }}
      >
        Review order
      </Button>
    </form>
  );
};

export default Payment;
