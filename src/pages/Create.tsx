import React, { useState } from "react";
import Cover from "../components/CreateComponents/Cover";
import Inner from "../components/CreateComponents/Inner";
import axios from "axios";
import { apiUrl } from "../Constants";
import { ThreeDots } from "react-loader-spinner";

const Create: React.FC = () => {
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
  const [isSurpriseMeLoading, setIsSurpriseMeLoading] = useState(false);
  const [isGenerateImageLoading, setIsGenerateImageLoading] = useState(false);
  const [isPoemSurpriseMeLoading, setIsPoemSurpriseMeLoading] = useState(false);
  const [isGeneratePoemLoading, setIsGeneratePoemLoading] = useState(false);
  const [isPurchaseLoading, setIsPurchaseLoading] = useState(false)

  const renderStage = () => {
    switch (currentStage) {
      case "Cover":
        return (
          <Cover
            onLoad={() => setIsGenerateImageLoading(false)}
            onNextPress={() => setCurrentStage('Inner')}
            onGenerate={onGenerate}
            handleSurpriseMe={onSurpriseMe}
            isSurpriseMeLoading={isSurpriseMeLoading}
            isGenerateImageLoading={isGenerateImageLoading}
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
            onLoad={() => setIsGenerateImageLoading(false)}
            onBackPress={() => setCurrentStage('Cover')}
            onGenerate={onGenerate}
            handleSurpriseMe={onSurpriseMe}
            isSurpriseMeLoading={isSurpriseMeLoading}
            innerImage={innerImage}
            innerText={innerText}
            setInnerText={setInnerText}
            setInnerImagePrompt={setInnerPrompt}
            innerImagePrompt={innerPrompt}
            isGenerateImageLoading={isGenerateImageLoading}
            handlePoemSurpriseMe={onPoemSurpriseMe}
            isPoemSurpriseMeLoading={isPoemSurpriseMeLoading}
            isGeneratingPoem={isGeneratePoemLoading}
            handleGeneratePoem={onGeneratePoem}
            font={font}
            fontColor={fontColor}
            setFont={setFont}
            setFontColor={setFontColor}
          />
        );
    }
  };

  const handlePurchase = async () => {
    setIsPurchaseLoading(true)
    try {
        const payload = {
          coverImage,
          innerImage,
          innerText,
          coverColour,
          font,
          fontColor
        }
        const hasEmptyValue = Object.values(payload).some(value => value === '');
        if (hasEmptyValue){
          alert("Please fill out all fields")
          setIsPurchaseLoading(false)
          return
        }
        const response = await axios.get(`${apiUrl}createPaymentLink`);
        window.open(response.data.paymentLink)
        localStorage.setItem("cardPayload", JSON.stringify(payload))
    } catch (error) {
        console.log("error", error)
    }
    setIsPurchaseLoading(false)
  }

  const onGenerate = async () => {
    let prompt = ''
    switch(currentStage){
        case 'Cover': prompt = coverPrompt; break
        case 'Inner': prompt = innerPrompt; break
    }
    if (prompt === ''){
      alert("Please provide a prompt")
      return
    }
    setIsGenerateImageLoading(true)
    try {
      const response = await axios.post(`${apiUrl}generate-image`, {prompt});
      const { imageUrl } = response.data;
      switch (currentStage) {
        case "Cover":
          setConverImage(imageUrl);
          break;
        case "Inner":
          setInnerImage(imageUrl);
          break;
      }
    } catch (error) {
      console.error("Error fetching image prompt:", error);
      alert("Error getting image.")
      setIsGenerateImageLoading(false)
    }
  };

  const onSurpriseMe = async () => {
    setIsSurpriseMeLoading(true);
    try {
      const response = await axios.get(`${apiUrl}generate-image-prompt`);
      const prompt = response.data.prompt.replaceAll('"', '');
      switch (currentStage) {
        case "Cover":
          setCoverPrompt(prompt);
          break;
        case "Inner":
          setInnerPrompt(prompt);
          break;
      }
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsSurpriseMeLoading(false);
  };

  const onPoemSurpriseMe = async () => {
    setIsPoemSurpriseMeLoading(true);
    try {
      const response = await axios.get(`${apiUrl}generate-random-poem`);
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
      const response = await axios.post(`${apiUrl}generate-poem`, {age, gender, theme, event});
      console.log("asd", response.data)
      const poem = response.data.poem;
      setInnerText(poem.replace(/"/g, '').replace(/\\n/g, '\n'))
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsGeneratePoemLoading(false);
  };

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
      <div
        style={{
          display: "flex",
          width: "30%",
          minWidth: "400px",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginTop: "30px",
        }}
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
                <div style={{ marginRight: "10px" }}>Purchase your card!</div>
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
              "Purchase your card!"
            )}
      </button>
    </div>
  );
};

export default Create;
