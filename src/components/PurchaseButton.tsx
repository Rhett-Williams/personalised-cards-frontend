import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

type Props = {
  payload: object;
  title: string;
};

const PurchaseButton = ({ payload, title}: Props) => {
    const [isPurchaseLoading, setIsPurchaseLoading] = useState(false)

    const handlePurchase = async () => {
        setIsPurchaseLoading(true)
        try {
            const hasEmptyValue = Object.values(payload).some(value => value === '');
            if (hasEmptyValue){
              alert("Please fill out all fields")
              setIsPurchaseLoading(false)
              return
            }
            localStorage.setItem("itemDetails", JSON.stringify(payload))
            const response = await axios.post(`${process.env.REACT_APP_API_URL}createPaymentLink`, payload);
            const isSafariMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            return /safari/.test(userAgent) && /mobile/.test(userAgent);
            };
            if (isSafariMobile()){
                window.location.href = response.data.paymentLink
            } else {
                window.open(response.data.paymentLink)
            }
        } catch (error) {
            console.log("error", error)
        }
        setIsPurchaseLoading(false)
      }

  return (
    <button
        disabled={isPurchaseLoading}
        className="generate-button"
        style={{ width: "70%", marginTop: "50px", marginBottom: "50px" }}
        onClick={handlePurchase}
    >
        {isPurchaseLoading ? (
            <div
                style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                }}
            >
                <div style={{ marginRight: "10px" }}>{title}</div>
                <ThreeDots
                height="25"
                width="15"
                radius="9"
                color="orange"
                ariaLabel="three-dots-loading"
                visible={true}
                />
            </div>
            ) : (
            title
            )}
    </button>
  );
};

export default PurchaseButton;