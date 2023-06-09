import React, { useEffect, useRef, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import ReactDropdown from 'react-dropdown';
import iphone14pro from '../../assets/iphones/iphone14pro.svg'
import GenerateButton from '../../components/GenerateButton';
import { phoneOptions } from '../../constants/Arrays';
import PurchaseButton from '../../components/PurchaseButton';
import PromptInputWithSurpriseMe from '../../components/PromptInputWithSurpriseMe';
import PhoneUtil from '../../constants/PhoneUtil';

const CreatePhoneCase: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState<any>({ label: "iPhone 14 Pro", value: "GLOBAL-TECH-IP14PR-TCB-CS-G" });
  const [isGenerateCoverImageLoading, setIsGenerateCoverImageLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <>
      <div className="feature-content" style={{padding: '0px 10px'}}>
        <h3 style={{textAlign: 'center'}}>{phone.label} Tough Case in Gloss</h3>
        <p style={{textAlign: 'center'}}>
        Protect your phone in style with our cutting-edge AI-generated phone cases, blending innovation and design for the perfect accessory.</p>
      </div>
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div style={{height: 'auto', marginBottom: 500, width: 500}}>
        {/* @ts-ignore */}
        <PhoneUtil image={image !== '' ? image : defaultImage} label={phone.label}/>
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
    <div style={{width: '50%', fontSize: 16, lineHeight: 0.5}}>
        <p style={{textAlign: 'start', fontWeight: "bold"}}>About this item:</p>
          <ul>
            <li>Glossy asd asd asdas dad as</li>
          </ul>
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
