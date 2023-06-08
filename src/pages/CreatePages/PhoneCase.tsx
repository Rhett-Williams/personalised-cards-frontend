import React, { useEffect, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import ReactDropdown from 'react-dropdown';
import iphone14pro from '../../assets/iphones/iphone14pro.svg'
import GenerateButton from '../../components/GenerateButton';
import { phoneOptions } from '../../constants/Arrays';
import PurchaseButton from '../../components/PurchaseButton';
import PromptInputWithSurpriseMe from '../../components/PromptInputWithSurpriseMe';

const CreatePhoneCase: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [backgroundSVG, setBackgroundSVG] = useState(iphone14pro)
  const [phone, setPhone] = useState<any>({ label: "iPhone 14 Pro", value: "GLOBAL-TECH-IP14PR-TCB-CS-G" });
  const [isGenerateCoverImageLoading, setIsGenerateCoverImageLoading] = useState(false);
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
        <PromptInputWithSurpriseMe title='Image prompt:' prompt={prompt} setPrompt={setPrompt}/>
        <GenerateButton type='image' prompt={prompt} onGenerated={setImage} isGenerateLoading={isGenerateCoverImageLoading} setIsGenerateLoading={setIsGenerateCoverImageLoading}/>
      </div>
    </div>
    <PurchaseButton
      title="Purchase your shirt!"
      payload={{
        productType: 'PhoneCase',
        image,
        phone
      }}
      />
    </>
  );
};

export default CreatePhoneCase;
