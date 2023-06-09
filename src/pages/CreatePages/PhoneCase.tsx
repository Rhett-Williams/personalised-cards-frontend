import React, { useEffect, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import ReactDropdown from 'react-dropdown';
import GenerateButton from '../../components/GenerateButton';
import { finishOptions, phoneOptions } from '../../constants/Arrays';
import PurchaseButton from '../../components/PurchaseButton';
import PromptInputWithSurpriseMe from '../../components/PromptInputWithSurpriseMe';
import PhoneUtil from '../../constants/PhoneUtil';

const CreatePhoneCase: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState<any>(phoneOptions[0]);
  const [finish, setFinish] = useState(finishOptions[0])
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
      <div style={{height: 500, width: 100}}>
        {/* @ts-ignore */}
        <div style={{transform: 'translate(-210px, 0px)'}}>
        <PhoneUtil onLoad={() => setIsGenerateCoverImageLoading(false)} image={image !== '' ? image : defaultImage} label={phone.label}/>
        </div>

      </div>
      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px', backgroundColor: 'white', padding: 5, borderRadius: 10}}>Choose phone type:</div>
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
        <div style={{fontWeight: 'bold', marginBottom: '15px', backgroundColor: 'white', padding: 5, borderRadius: 10}}>Finish:</div>
        <section className="color-picker">
          <ReactDropdown
            className="dropdown"
            arrowClassName="dropdown-option"
            options={finishOptions}
            onChange={(value) => setFinish(value.value)}
            value={finish}
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
      title="Purchase your phone case!"
      payload={{
        productType: 'PhoneCase',
        image,
        phoneType: phone.label,
        finish
      }}
      />
    </>
  );
};

export default CreatePhoneCase;
