import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import defaultImage from '../../assets/defaultImage.png';
import ReactDropdown from 'react-dropdown';
import iphone14pro from '../../assets/iphones/iphone14pro.svg'
import iphone14promax from '../../assets/iphones/iphone14promax.svg'
import iphone14 from '../../assets/iphones/iphone14.svg'
import iphone14plus from '../../assets/iphones/iphone14plus.svg'
import iphone13pro from '../../assets/iphones/iphone13pro.svg'
import iphone13promax from '../../assets/iphones/iphone13promax.svg'
import iphone13 from '../../assets/iphones/iphone13.svg'
import iphone13mini from '../../assets/iphones/iphone13mini.svg'
import iphone12pro from '../../assets/iphones/iphone12pro.svg'
import iphone12promax from '../../assets/iphones/iphone12promax.svg'
import iphone12 from '../../assets/iphones/iphone12.svg'
import iphone12mini from '../../assets/iphones/iphone12mini.svg'
import iphonese2020 from '../../assets/iphones/iphonese2020.svg'
import iphone11pro from '../../assets/iphones/iphone11pro.svg'
import iphone11promax from '../../assets/iphones/iphone11promax.svg'
import iphone11 from '../../assets/iphones/iphone11.svg'
import iphonexr from '../../assets/iphones/iphonexr.svg'
import iphonexs from '../../assets/iphones/iphonexs.svg'
import iphonexsmax from '../../assets/iphones/iphonexsmax.svg'
import iphonex from '../../assets/iphones/iphonex.svg'

const CreatePhoneCase: React.FC = () => {
    const [currentStage, setCurrentStage] = useState<
    "Cover" | "Inner" 
  >("Cover");
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [backgroundSVG, setBackgroundSVG] = useState(iphone14pro)
  const [phone, setPhone] = useState<any>({ label: "iPhone 14 Pro", value: "GLOBAL-TECH-IP14PR-TCB-CS-G" });
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

  function getImageByValue(value: string) {
    for (const option of phoneOptions) {
      if (option.label === value) {
        return option.image;
      }
    }
    return null; // Return null if no match is found
  }

  useEffect(() => {
    // console.log("asdasd", phone.value)
    const newImage = getImageByValue(phone.label)
    if (!newImage) return
    setBackgroundSVG(newImage)
  },[phone.value])

  const handlePurchase = async () => {
    setIsPurchaseLoading(true)
    try {
        const payload = {
          productType: 'PhoneCase',
          image,
          phone
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

  const phoneOptions = [
    {
      label: "iPhone 14 Pro",
      value: "GLOBAL-TECH-IP14PR-TCB-CS-G",
      image: iphone14pro
    },
    {
      label: "iPhone 14 Pro Max",
      value: "GLOBAL-TECH-IP14PM-TCB-CS-G",
      image: iphone14promax
    },
    {
      label: "iPhone 14",
      value: "GLOBAL-TECH-IP14-TCB-CS-G",
      image: iphone14
    },
    {
      label: "iPhone 14 Plus",
      value: "GLOBAL-TECH-IP14PL-TCB-CS-G",
      image: iphone14plus
    },
    {
      label: "iPhone 13 Pro",
      value: "GLOBAL-TECH-IP13P-TCB-CS-G",
      image: iphone13pro
    },
    {
      label: "iPhone 13 Pro Max",
      value: "GLOBAL-TECH-IP13PM-TCB-CS-G",
      image: iphone13promax
    },
    {
      label: "iPhone 13",
      value: "GLOBAL-TECH-IP13-TCB-CS-G",
      image: iphone13
    },
    {
      label: "iPhone 13 Mini",
      value: "GLOBAL-TECH-IP13MN-TCB-CS-G",
      image: iphone13mini
    },
    {
      label: "iPhone 12 Pro",
      value: "GLOBAL-TECH-IP12P-TCB-CS-G",
      image: iphone12pro
    },
    {
      label: "iPhone 12 Pro Max",
      value: "GLOBAL-TECH-IP12PM-TCB-CS-G",
      image: iphone12promax
    },
    {
      label: "iPhone 12",
      value: "GLOBAL-TECH-IP12-TCB-CS-G",
      image: iphone12
    },
    {
      label: "iPhone 12 Mini",
      value: "GLOBAL-TECH-IP12MN-TCB-CS-G",
      image: iphone12mini
    },
    {
      label: "iPhone SE (2020)",
      value: "GLOBAL-TECH-IPSE-TCB-CS-G",
      image: iphonese2020
    },
    {
      label: "iPhone 11 Pro",
      value: "GLOBAL-TECH-IP11P-TCB-CS-G",
      image: iphone11pro
    },
    {
      label: "iPhone 11 Pro Max",
      value: "GLOBAL-TECH-IP11PM-TCB-CS-G",
      image: iphone11promax
    },
    {
      label: "iPhone 11",
      value: "GLOBAL-TECH-IP11-TCB-CS-G",
      image: iphone11
    },
    {
      label: "iPhone XR",
      value: "GLOBAL-TECH-IPXR-TCB-CS-G",
      image: iphonexr
    },
    {
      label: "iPhone XS",
      value: "GLOBAL-TECH-IPXS-TCB-CS-G",
      image: iphonexs
    },
    {
      label: "iPhone XS Max",
      value: "GLOBAL-TECH-IPXSM-TCB-CS-G",
      image: iphonexsmax
    },
    {
      label: "iPhone X",
      value: "GLOBAL-TECH-IPX-TCB-CS-G",
      image: iphonex
    }
  ]

console.log(phone)
  return (
    <>
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div className="create-shirt-svg-container">
        {/* @ts-ignore */}

        <img
          src={backgroundSVG}/>
          <div className="phone-case-generated-image-container">
              <div className="shirt-generated-image-inner-div">
                <img src={image} onLoad={() => setIsGenerateCoverImageLoading(false)} className="shirt-image" />
                {image === '' && <img src={defaultImage} alt="Overlay Image" className="shirt-image" style={{opacity: 0.6}}/>}
              </div>
          </div>
      </div>
      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Choose phone type:</div>
        <section className="color-picker">
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={phoneOptions}
          onChange={(value) => setPhone(value)}
          value={phone}
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

export default CreatePhoneCase;
