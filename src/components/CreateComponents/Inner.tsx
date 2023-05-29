import React, { useEffect, useState } from "react";
import PictureOverlayInner from "../PictureOverlayInner";
import ReactDropdown from "react-dropdown";
import { ThreeDots } from "react-loader-spinner";
import { HexColorPicker } from "react-colorful";

type Props = {
  innerImage: string;
  innerText: string;
  setInnerText: (value: string) => void;
  onGenerate: () => void;
  handleSurpriseMe: () => void;
  handlePoemSurpriseMe: () => void;
  handleGeneratePoem: (
    age: string,
    gender: string,
    theme: string,
    event: string
  ) => void;
  innerImagePrompt: string;
  setInnerImagePrompt: (value: string) => void;
  isSurpriseMeLoading: boolean;
  isGenerateImageLoading: boolean;
  isPoemSurpriseMeLoading: boolean;
  isGeneratingPoem: boolean;
  onBackPress: () => void
  font: string
  fontColor: string
  setFont: (font: string) => void
  setFontColor: (fontColor: string) => void
  onLoad: () => void
};

const Inner: React.FC<Props> = ({
  innerImage,
  innerText,
  setInnerText,
  onGenerate,
  handleSurpriseMe,
  handlePoemSurpriseMe,
  handleGeneratePoem,
  innerImagePrompt,
  setInnerImagePrompt,
  isSurpriseMeLoading,
  isGenerateImageLoading,
  isPoemSurpriseMeLoading,
  isGeneratingPoem,
  onBackPress,
  font,
  fontColor,
  setFont,
  setFontColor,
  onLoad
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [option, setOption] = useState<{
    gender: string;
    event: string;
    theme: string;
  }>({ gender: "", event: "", theme: "" });
  const [inputs, setInputs] = useState<{
    gender: string;
    event: string;
    theme: string;
  }>({ gender: "", event: "", theme: "" });
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  const genderOptions = ["Boy", "Girl", "Wife & Husband", "Other"];

  const eventOptions = [
    "Birthday",
    "Wedding",
    "Christmas",
    "Valentines Day",
    "Mothers Day",
    "Other",
  ];

  const themeOptions = ["Dinosaurs", "Love", "Snowy", "Cute", "Wine", "Other"];

  const fontOptions = ["Sarah", "Charlie", "Lauren", "Alexander", "Roboto"];

  const validateForm = () => {
    console.log(option);
    try {
      if (parseInt(age) < 1 || parseInt(age) > 150)
        throw Error("Please provide a real age");
      if (option.event === "" || option.gender === "" || option.theme === "")
        throw Error("Please select one of each option");
      if (
        (option.event === "Other" && inputs.event === "") ||
        (option.gender === "Other" && inputs.gender === "") ||
        (option.theme === "" && inputs.theme === "")
      )
        throw Error("Please fill out all 'Other' fields");
      handleGeneratePoem(
        age,
        option.gender === "Other" ? inputs.gender : option.gender,
        option.event === "Other" ? inputs.event : option.event,
        option.theme === "Other" ? inputs.theme : option.theme
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <PictureOverlayInner
        onLoad={onLoad}
        image={innerImage}
        text={innerText}
        font={font}
        fontColor={fontColor}
        onChange={setInnerText}
      />
      <div className="inner-side-options">
        <div style={{paddingLeft: 10, fontWeight: 'bold', marginBottom: '15px'}}>Font:</div>
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={fontOptions}
          onChange={(value) => setFont(value.value)}
          value={font}
          placeholder="Select an option"
        />
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Font colour:</div>
        <section className="color-picker">
        <HexColorPicker
          color={fontColor}
          onChange={setFontColor}
        />
        </section>
        <div>{fontColor}</div>
      </div>
      <div className="inner-form-container">
        <div className="inner-form-sub-container">
          <div className="cover-form-prompt">
            <span>Image prompt:</span>
            <button
              disabled={isSurpriseMeLoading}
              className="cover-form-surprise-button"
              onClick={handleSurpriseMe}
            >
              Surprise Me
            </button>
            {isSurpriseMeLoading && (
              <ThreeDots
                height="20"
                width="20"
                radius="9"
                color="orange"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            )}
          </div>
          <input
            type="text"
            className="text-input"
            value={innerImagePrompt}
            onChange={(e) => setInnerImagePrompt(e.target.value)}
          />
          <div style={{fontSize: 12, marginTop: 10}}><div style={{fontWeight: 'bold'}}>Hint:</div> For the best results, trying being specific with the resolution or adding an art style. E.g: Pixar 3D render, 4k</div>
          <button className="generate-button" onClick={onGenerate} disabled={isGenerateImageLoading}>
            {isGenerateImageLoading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>Generating</div>
                <ThreeDots
                  height="15"
                  width="15"
                  radius="9"
                  color="orange"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            ) : (
              "Generate"
            )}
          </button>
        </div>
        <div className="inner-form-sub-container">
          <div className="cover-form-prompt" style={{ marginBottom: "10px" }}>
            <span>Poem prompt:</span>
            <button
              disabled={isPoemSurpriseMeLoading}
              className="cover-form-surprise-button"
              onClick={handlePoemSurpriseMe}
            >
              Surprise Me
            </button>
            {isPoemSurpriseMeLoading && (
              <ThreeDots
                height="20"
                width="20"
                radius="9"
                color="orange"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            )}
          </div>
          <div>Age:</div>
          <input
            type="number"
            placeholder="Example: 6"
            className="text-input"
            style={{ marginBottom: "10px" }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div>Who is this for?:</div>
          <ReactDropdown
            className="dropdown"
            arrowClassName="dropdown-option"
            options={genderOptions}
            onChange={(value) => setOption({ ...option, gender: value.value })}
            placeholder="Select an option"
          />
          {option.gender === "Other" && (
            <input
              type="text"
              placeholder="Example: Dog"
              className="text-input"
              style={{ marginBottom: "10px", borderColor: "orange" }}
              value={inputs.gender}
              onChange={(e) => setInputs({ ...option, gender: e.target.value })}
            />
          )}
          <div>Event:</div>
          <ReactDropdown
            className="dropdown"
            arrowClassName="dropdown-option"
            options={eventOptions}
            onChange={(value) => setOption({ ...option, event: value.value })}
            placeholder="Select an option"
          />
          {option.event === "Other" && (
            <input
              type="text"
              placeholder="Example: Funeral"
              className="text-input"
              style={{ marginBottom: "10px", borderColor: "orange" }}
              value={inputs.event}
              onChange={(e) => setInputs({ ...option, event: e.target.value })}
            />
          )}
          <div>Theme:</div>
          <ReactDropdown
            className="dropdown"
            arrowClassName="dropdown-option"
            options={themeOptions}
            onChange={(value) => setOption({ ...option, theme: value.value })}
            placeholder="Select an option"
          />
          {option.theme === "Other" && (
            <input
              type="text"
              placeholder="Example: Shakesperian"
              className="text-input"
              style={{ marginBottom: "10px", borderColor: "orange" }}
              value={inputs.theme}
              onChange={(e) => setInputs({ ...option, theme: e.target.value })}
            />
          )}
          <button className="generate-button" onClick={validateForm} disabled={isGeneratingPoem}>
            {isGeneratingPoem ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>Generating</div>
                <ThreeDots
                  height="15"
                  width="15"
                  radius="9"
                  color="orange"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            ) : (
              "Generate"
            )}
          </button>
        </div>
      </div>
      <div
          className="create-button"
          style={{marginTop: '20px'}}
          onClick={onBackPress}
        >
          {'<< Back'}
        </div>
    </div>
  );
};

export default Inner;
