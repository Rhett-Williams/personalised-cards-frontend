import React, { useEffect, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import TShirt from '../../assets/TShirt';
import ReactDropdown from 'react-dropdown';
import GenerateButton from '../../components/GenerateButton';
import { colorOptions, sizeOptions } from '../../constants/Arrays';
import PurchaseButton from '../../components/PurchaseButton';
import PromptInputWithSurpriseMe from '../../components/PromptInputWithSurpriseMe';

const CreateShirt: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState<any>({label: "White", value: "#FFFFFF"});
  const [size, setSize] = useState('S')
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
          onChange={(value) => setSize(value.value)}
          value={size}
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
        productType: 'Shirt',
        image,
        color: color.label,
        size
      }}
      />
    </>
  );
};

export default CreateShirt;
