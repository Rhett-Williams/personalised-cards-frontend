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
  const [size, setSize] = useState('Small')
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
          productType: 'Shirt',
          image,
          color: color.value,
          size
        }
        const hasEmptyValue = Object.values(payload).some(value => value === '');
        if (hasEmptyValue){
          alert("Please fill out all fields")
          setIsPurchaseLoading(false)
          return
        }
        console.log("pasd", payload)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}createPaymentLink`, payload);
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
    {
      "label": "Army",
      "value": "#3C4D2F"
    },
    {
      "label": "Asphalt",
      "value": "#50575C"
    },
    {
      "label": "Black",
      "value": "#000000"
    },
    {
      "label": "Brown",
      "value": "#4E3629"
    },
    {
      "label": "Cranberry",
      "value": "#9D1A35"
    },
    {
      "label": "Gold",
      "value": "#FFD700"
    },
    {
      "label": "Grass",
      "value": "#7FB80E"
    },
    {
      "label": "Heather Aubergine",
      "value": "#473146"
    },
    {
      "label": "Heather Charcoal",
      "value": "#4D5055"
    },
    {
      "label": "Heather Grey",
      "value": "#B7B9BD"
    },
    {
      "label": "Light Blue",
      "value": "#ADD8E6"
    },
    {
      "label": "Navy",
      "value": "#000080"
    },
    {
      "label": "Orange",
      "value": "#FFA500"
    },
    {
      "label": "Red",
      "value": "#FF0000"
    },
    {
      "label": "Royal",
      "value": "#4169E1"
    },
    {
      "label": "Sand",
      "value": "#C2B280"
    },
    {
      "label": "Silver",
      "value": "#C0C0C0"
    },
    {
      "label": "White",
      "value": "#FFFFFF"
    }
  ]

  const sizeOptions = [
    'S',
    'M',
    'L',
    'XL',
    '2XL',
    '3XL'
  ]

  return (
    <>
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div className="create-shirt-svg-container">
        {/* @ts-ignore */}
        <TShirt color={color.value ?? 'white'}/>
          <div className="shirt-generated-image-container">
              <div className="shirt-generated-image-inner-div">
                <img src={image} onLoad={() => setIsGenerateCoverImageLoading(false)} className="shirt-image" />
                {image === '' && <img src={defaultImage} alt="Overlay Image" className="shirt-image" style={{opacity: 0.6}}/>}
              </div>
          </div>

      </div>

      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Shirt colour:</div>
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
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Shirt Size:</div>
        <section className="color-picker">
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={sizeOptions}
          onChange={(value) => setColor(value.value)}
          value={size}
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
                height="35"
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
        className="button button-primary"
        style={{ marginTop: "50px", marginBottom: "50px" }}
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
