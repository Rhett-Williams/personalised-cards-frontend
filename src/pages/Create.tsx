import React, { useState } from "react";
import CreateDisplayWindow from "../components/CreateDisplayWindow";
import CreateCard from "./CreatePages/Card";
import CreatePhoneCase from "./CreatePages/PhoneCase";
import CreateShirt from "./CreatePages/Shirt";
import { options } from "../constants/Arrays";
import Side from "../assets/this.png";

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
                style={{
                  animation: `fadeIn 1s ease-in-out forwards ${index * 500}ms`,
                }}
              />
            );
          })}
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
      <div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <img style={{ objectFit: "revert" }} src={Side} />
      </div>

      <img className="side-image-removing" src={Side} />
      {renderOptions()}

      {selectedOption !== "none" && (
        <div style={{ width: "100%", height: 30 }}>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
              left: "30%",
              fontFamily: "IBM Plex Sans",
              fontWeight: "bold",
            }}
            onClick={() => setSelectedOption("none")}
          >
            {"<< Back"}
          </div>
        </div>
      )}
      {renderCreateOption()}
    </div>
  );
};

export default Create;
