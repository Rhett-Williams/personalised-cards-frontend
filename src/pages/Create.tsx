import React, { useState } from "react";
import CreateDisplayWindow from "../components/CreateDisplayWindow";
import CreateCard from "./CreatePages/Card";
import CreatePhoneCase from "./CreatePages/PhoneCase";
import CreateShirt from "./CreatePages/Shirt";
import { options } from "../constants/Arrays";

const Create: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("none");

  const renderOptions = () => {
    if (selectedOption !== "none") return;
    return (
      <>
        <div
          style={{
            fontFamily: "IBM Plex Sans",
            fontSize: "30px",
            color: "black",
            marginBottom: 50,
            textAlign: "center",
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          Choose which product you would like to create!
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
        {options.map((option, index) => {
            return (
              <CreateDisplayWindow
                name={option.name}
                image={option.image}
                onClick={() => setSelectedOption(option.id)}
                style={{animation: `fadeIn 1s ease-in-out forwards ${index*500}ms`}}
              />
            );
          }
        )}
        </div>
        <div
          style={{
            fontFamily: "IBM Plex Sans",
            fontSize: "30px",
            color: "black",
            marginTop: 50,
            textAlign: "center",
          }}
        >
          More Coming Soon...
        </div>
      </>
    );
  };

  const renderCreateOption = () => {
    switch (selectedOption) {
      case "none":
        return;
      case "Card":
        return <CreateCard />;
      case "PhoneCase":
        return <CreatePhoneCase />;
      case "Shirt":
        return <CreateShirt />;
    }
  };

  return (
    <div className="main-create-container">
      <link
        href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600"
        rel="stylesheet"
      />
      {renderOptions()}

      {selectedOption !== "none" && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedOption("none")}
        >
          {"<< Back"}
        </div>
      )}
      {renderCreateOption()}
    </div>
  );
};

export default Create;
