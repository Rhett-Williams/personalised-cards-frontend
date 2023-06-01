import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { apiUrl } from '../../Constants';
import { ThreeDots } from 'react-loader-spinner';

const CreateShirt: React.FC = () => {
    const [currentStage, setCurrentStage] = useState<
    "Cover" | "Inner" 
  >("Cover");
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState('#ffffff');
  const [size, setSize] = useState('')
  const [isSurpriseMeLoading, setIsSurpriseMeLoading] = useState(false);
  const [isGenerateCoverImageLoading, setIsGenerateCoverImageLoading] = useState(false);
  const [isPurchaseLoading, setIsPurchaseLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  const handlePurchase = async () => {
    setIsPurchaseLoading(true)
    try {
        const payload = {
          image,
          color,
        }
        const hasEmptyValue = Object.values(payload).some(value => value === '');
        if (hasEmptyValue){
          alert("Please fill out all fields")
          setIsPurchaseLoading(false)
          return
        }
        const response = await axios.post(`${apiUrl}createPaymentLink`, {payload});
        window.open(response.data.paymentLink)
    } catch (error) {
        console.log("error", error)
    }
    setIsPurchaseLoading(false)
  }

  const onGenerate = async () => {
    let prompt = ''
    setIsGenerateCoverImageLoading(true)
    if (prompt === ''){
      alert("Please provide a prompt")
      setIsGenerateCoverImageLoading(false)
      return
    }
    
    try {
      const response = await axios.post(`${apiUrl}generateImage`, {prompt});
      const { imageUrl } = response.data;
      setImage(imageUrl)
    } catch (error) {
      console.error("Error fetching image prompt:", error);
      alert("Error getting image.")
      setIsGenerateCoverImageLoading(false)
    }
  };

  const onSurpriseMe = async () => {
    setIsSurpriseMeLoading(true);
    try {
      const response = await axios.post(`${apiUrl}trackingDetailsEmail`);
      const prompt = response.data.prompt.replaceAll('"', '');
      setPrompt(prompt);
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsSurpriseMeLoading(false);
  };

  return (
    <>
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      
      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Page colour:</div>
        <section className="color-picker">
        <HexColorPicker
          color={color}
          onChange={setColor}
        />
        </section>
        <div>{color}</div>
      </div>
      <div className="cover-form-container">
        <div className="cover-form-prompt">
          <span >Image prompt:</span>
          <button
            disabled={isSurpriseMeLoading}
            className="cover-form-surprise-button"
            onClick={onSurpriseMe}
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
          placeholder="Example: A dinosaur sitting on a mountain watching the sunset"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div style={{fontSize: 12, marginTop: 10}}><div style={{fontWeight: 'bold'}}>Hint:</div> For the best results, trying being specific with the resolution or adding an art style. E.g: Pixar 3D render, 4k</div>
        <button className="generate-button" onClick={onGenerate} disabled={isGenerateCoverImageLoading}>
          {isGenerateCoverImageLoading ? (
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
              <div style={{marginRight: '10px'}}>Generating</div>
              <ThreeDots
                height="25"
                width="15"
                radius="9"
                color="orange"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>):'Generate'}
        </button>
      </div>
    </div>
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
                <div style={{ marginRight: "10px" }}>Purchase your shirt!</div>
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
              "Purchase your shirt!"
            )}
      </button>
    </>
  );
};

export default CreateShirt;