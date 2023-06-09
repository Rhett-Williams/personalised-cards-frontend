import React, { useEffect, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import Gildan64000 from '../../assets/Gildan64000';
import ReactDropdown from 'react-dropdown';
import GenerateButton from '../../components/GenerateButton';
import { colorOptions, shirtSyles, sizeOptions } from '../../constants/Arrays';
import PurchaseButton from '../../components/PurchaseButton';
import PromptInputWithSurpriseMe from '../../components/PromptInputWithSurpriseMe';
import Delta97100 from '../../assets/Delta97100';
import Gildan64v00 from '../../assets/Gildan64v00';

const CreateShirt: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState<any>({label: "White", value: "#FFFFFF"});
  const [size, setSize] = useState('S')
  const [style, setStyle] = useState('Unisex Softstyle T-Shirt, Gildan 64000')
  const [isGenerateCoverImageLoading, setIsGenerateCoverImageLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  const getShirtStyle = () => {
    switch(style){
      case 'Unisex Softstyle T-Shirt': return <Gildan64000 color={color.value ?? 'white'} image={image !== '' ? image : defaultImage}/>;
      case 'Unisex Fleece French Terry Crew': return <Delta97100 color={color.value ?? 'white'} image={image !== '' ? image : defaultImage}/>;
      case 'Unisex Softstyle V-neck T-shirt': return <Gildan64v00 color={color.value ?? 'white'} image={image !== '' ? image : defaultImage}/>
    }
  }

  return (
    <>
      <div className="feature-content" style={{padding: '0px 10px'}}>
        <h3 style={{textAlign: 'center'}}>{style}</h3>
        <p style={{textAlign: 'center'}}>
        Express your unique style with our AI-generated t-shirts, where artistry and technology merge to create one-of-a-kind fashion statements.</p>
      </div>
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div className="create-shirt-svg-container">
        {/* @ts-ignore */}
        {getShirtStyle()}
      </div>

      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Colour:</div>
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
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Size:</div>
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
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Style:</div>
        <section className="color-picker">
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={shirtSyles}
          onChange={(value) => setStyle(value.value)}
          value={style}
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
