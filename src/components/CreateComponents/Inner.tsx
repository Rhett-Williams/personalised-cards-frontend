import React, { useEffect, useState } from "react";
import PictureOverlayInner from "../PictureOverlayInner";
import ReactDropdown from "react-dropdown";
import { ThreeDots } from "react-loader-spinner";
import { HexColorPicker } from "react-colorful";
import GenerateButton from "../GenerateButton";
import PromptInputWithSurpriseMe from "../PromptInputWithSurpriseMe";
import { eventOptions, fontOptions, genderOptions, themeOptions } from "../../constants/Arrays";

type Props = {
  innerImage: string;
  onSetInnerImage: (url: string) => void
  innerText: string;
  setInnerText: (value: string) => void;
  handlePoemSurpriseMe: () => void;
  handleGeneratePoem: (
    age: string,
    gender: string,
    theme: string,
    event: string
  ) => void;
  innerImagePrompt: string;
  setInnerImagePrompt: (value: string) => void;
  isGenerateImageLoading: boolean;
  setIsGenerateImageLoading: (isLoading: boolean) => void;
  isPoemSurpriseMeLoading: boolean;
  isGeneratingPoem: boolean;
  onBackPress: () => void
  font: string
  fontColor: string
  setFont: (font: string) => void
  setFontColor: (fontColor: string) => void
  onLoad: () => void
  pageColor: string
};

const Inner: React.FC<Props> = ({
  innerImage,
  onSetInnerImage,
  innerText,
  setInnerText,
  handlePoemSurpriseMe,
  handleGeneratePoem,
  innerImagePrompt,
  setInnerImagePrompt,
  isGenerateImageLoading,
  setIsGenerateImageLoading,
  isPoemSurpriseMeLoading,
  isGeneratingPoem,
  onBackPress,
  font,
  fontColor,
  setFont,
  setFontColor,
  onLoad,
  pageColor
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
        pageColor={pageColor}
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
          <PromptInputWithSurpriseMe title="Image prompt:" prompt={innerImagePrompt} setPrompt={setInnerImagePrompt}/>
          <GenerateButton type='image' prompt={innerImagePrompt} onGenerated={onSetInnerImage} isGenerateLoading={isGenerateImageLoading} setIsGenerateLoading={setIsGenerateImageLoading}/>
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
          <div className="poem-dropdown-description">Age:</div>
          <input
            type="number"
            placeholder="Example: 6"
            className="text-input"
            style={{ marginBottom: "10px" }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="poem-dropdown-description">Who is this for?:</div>
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
          <div className="poem-dropdown-description">Event:</div>
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
          <div className="poem-dropdown-description">Theme:</div>
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
          <GenerateButton type='poem' prompt={innerImagePrompt} onGenerated={(e) => validateForm()} isGenerateLoading={isGeneratingPoem} setIsGenerateLoading={() => null}/>
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
