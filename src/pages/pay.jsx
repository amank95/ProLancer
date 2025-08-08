import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import API from "../api/api";
import { useParams } from "react-router-dom";
import CheckoutFrom from "../components/checkoutForm/CheckoutForm"
const stripePromise = loadStripe(
  "pk_test_51RtgKlHlFGr954kWGj5ScJuWNvQWShu2ISnaymsCLdddwwNBfTV4dURD7NCDd4mKeE6OCJbB9qvfaIGjdmQoxkfl00jsjOLNJf"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await API.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
//   pay
  <div className="">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutFrom/>
        </Elements>
      )}
  </div>
  );
};

export default Pay;