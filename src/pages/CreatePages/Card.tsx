import React, { useState } from "react";
import Cover from "../../components/CreateComponents/Cover";
import Inner from "../../components/CreateComponents/Inner";
import axios from "axios";
import PurchaseButton from "../../components/PurchaseButton";

const CreateCard: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<
    "Cover" | "Inner" 
  >("Cover");
  const [coverPrompt, setCoverPrompt] = useState("");
  const [coverImage, setConverImage] = useState("");
  const [innerPrompt, setInnerPrompt] = useState("");
  const [innerImage, setInnerImage] = useState("");
  const [innerText, setInnerText] = useState("");
  const [coverColour, setCoverColour] = useState('#ffffff')
  const [font, setFont] = useState('Roboto')
  const [fontColor, setFontColor] = useState('#000000')
  const [isGenerateCoverImageLoading, setIsGenerateCoverImageLoading] = useState(false);
  const [isGenerateInnerImageLoading, setIsGenerateInnerImageLoading] = useState(false);
  const [isPoemSurpriseMeLoading, setIsPoemSurpriseMeLoading] = useState(false);
  const [isGeneratePoemLoading, setIsGeneratePoemLoading] = useState(false);

  const renderStage = () => {
    switch (currentStage) {
      case "Cover":
        return (
          <Cover
            onLoad={() => setIsGenerateCoverImageLoading(false)}
            onNextPress={() => setCurrentStage('Inner')}
            onSetCoverImage={setConverImage}
            isGenerateImageLoading={isGenerateCoverImageLoading}
            setIsGenerateImageLoading={setIsGenerateCoverImageLoading}
            prompt={coverPrompt}
            setPrompt={setCoverPrompt}
            coverImage={coverImage}
            coverColor={coverColour}
            setCoverColor={setCoverColour}
          />
        );
      case "Inner":
        return (
          <Inner
            onLoad={() => setIsGenerateInnerImageLoading(false)}
            onBackPress={() => setCurrentStage('Cover')}
            onSetInnerImage={setInnerImage}
            innerImage={innerImage}
            setIsGenerateImageLoading={setIsGenerateInnerImageLoading}
            innerText={innerText}
            setInnerText={setInnerText}
            setInnerImagePrompt={setInnerPrompt}
            innerImagePrompt={innerPrompt}
            isGenerateImageLoading={isGenerateInnerImageLoading}
            handlePoemSurpriseMe={onPoemSurpriseMe}
            isPoemSurpriseMeLoading={isPoemSurpriseMeLoading}
            isGeneratingPoem={isGeneratePoemLoading}
            handleGeneratePoem={onGeneratePoem}
            font={font}
            fontColor={fontColor}
            setFont={setFont}
            setFontColor={setFontColor}
            pageColor={coverColour}
          />
        );
    }
  };

  const onPoemSurpriseMe = async () => {
    setIsPoemSurpriseMeLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}generateRandomPoem`);
      const poem = response.data.poem.replaceAll('"', '');
      setInnerText(poem.replace(/"/g, '').replace(/\\n/g, '\n'))
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsPoemSurpriseMeLoading(false);
  };

  const onGeneratePoem = async (age: string, gender: string, theme: string, event: string) => {
    setIsGeneratePoemLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}generatePoem`, {age, gender, theme, event});
      console.log("asd", response.data)
      const poem = response.data.poem;
      setInnerText(poem.replace(/"/g, '').replace(/\\n/g, '\n'))
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsGeneratePoemLoading(false);
  };

  return (
    <
    >
      <div
        className="create-page-headers"
      >
        <div
          className={
            currentStage === "Cover"
              ? "create-button-selected"
              : "create-button"
          }
          onClick={() => setCurrentStage("Cover")}
        >
          Cover
        </div>
        <div
          className={
            currentStage === "Inner"
              ? "create-button-selected"
              : "create-button"
          }
          onClick={() => setCurrentStage("Inner")}
        >
          Inner
        </div>
      </div>
      {renderStage()}
          <PurchaseButton
            title="Purchase your card!"
            payload={{
              productType: 'Card',
              coverImage,
              innerImage,
              innerText,
              coverColour,
              font,
              fontColor
            }}
            />
    </>
  );
};

export default CreateCard;
