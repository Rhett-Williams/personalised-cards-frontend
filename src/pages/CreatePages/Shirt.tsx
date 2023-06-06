import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { ThreeDots } from 'react-loader-spinner';
import defaultImage from '../../assets/defaultImage.png';
import TShirt from '../../assets/TShirt';
import ReactDropdown from 'react-dropdown';

const CreateShirt: React.FC = () => {
    const [currentStage, setCurrentStage] = useState<
    "Cover" | "Inner" 
  >("Cover");
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState<any>({label: "Navy", value: "white"});
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
          purchaseType: 'Shirt',
          image,
          color: color.value,

        }
        const hasEmptyValue = Object.values(payload).some(value => value === '');
        if (hasEmptyValue){
          alert("Please fill out all fields")
          setIsPurchaseLoading(false)
          return
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}createPaymentLink`, {payload});
        window.open(response.data.paymentLink)
    } catch (error) {
        console.log("error", error)
    }
    setIsPurchaseLoading(false)
  }

  const onGenerate = async () => {
    setIsGenerateCoverImageLoading(true)
    if (prompt === ''){
      alert("Please provide a prompt")
      setIsGenerateCoverImageLoading(false)
      return
    }
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}generateImage`, {prompt});
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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}generateImagePrompt`);
      const prompt = response.data.prompt.replaceAll('"', '');
      setPrompt(prompt);
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsSurpriseMeLoading(false);
  };

  const colorOptions = [
    {label: "Black Triblend", value: "#141615"},
    {label: "Charcoal Black", value: "#3d3935"},
    {label: "Green Triblend", value: "#507158"},
    {label: "Navy", value: "#0d121e"},
    {label: "Navy Triblend", value: "#474960"},
    {label: "Olive", value: "#434c31"},
    {label: "Red", value: "#ff0000"},
    {label: "Red Triblend", value: "#cb333b"},
    {label: "True Royal", value: "#1c438c"},
    {label: "True Royal Triblend", value: "#2f55a4"},
  ]

  return (
    <>
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div style={{width: 500, minWidth: 300, display: 'flex', justifyContent: 'center'}}>
        {/* @ts-ignore */}
        <TShirt color={color.value ?? 'white'}/>
          <div style={{position: 'absolute', width: 200, top: 100, height: 250}}>
            <img src={image} onLoad={() => setIsGenerateCoverImageLoading(false)} className="shirt-image" />
            {image === '' && <img src={defaultImage} alt="Overlay Image" className="shirt-image" style={{opacity: 0.6}}/>}
          </div>

      </div>

      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Page colour:</div>
        <section className="color-picker">
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={colorOptions}
          onChange={(value) => setColor(value)}
          value={color.value}
          placeholder="Select an option"
        />
        </section>
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
