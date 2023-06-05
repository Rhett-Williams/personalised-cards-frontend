import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "../components/PaymentCompleteComponents/Error";
import OrderOnTheWay from "../components/PaymentCompleteComponents/OrderOnTheWay";
import { BallTriangle } from "react-loader-spinner";

const PaymentComplete: React.FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const validatePayment = async (routeId?: string) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}validatePayment`, {
        paymentLinkId: routeId
      });
      if (!response.data.isValidPayment) throw Error;
      setIsError(false)
    } catch (error) {
      
    }
    setIsLoading(false)
  };

  useEffect(() => {
    validatePayment(id);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "70%",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      {isLoading ? (
        <BallTriangle
          height="500"
          width="500"
          radius="9"
          color="orange"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : isError ? (
        <Error />
      ) : (
        <OrderOnTheWay />
      )}
    </div>
  );
};

export default PaymentComplete;
