import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H6a3jJWQAosoFKzA1zUWW43iBBCVxKfU0odyw1ktAzyrwnozBDM7zYr3VDDAYsYUIhIcV7CkMwy86m7yDrgL53700mes2jZbB";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful!");
      })
      .catch((error) => {
        console.log("Payment error", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Grancents Collections"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={` Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
