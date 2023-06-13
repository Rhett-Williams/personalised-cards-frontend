import React, { useEffect, useState } from 'react';
import defaultImage from '../../assets/defaultImage.png';
import Gildan64000 from '../../assets/Gildan64000';
import ReactDropdown from 'react-dropdown';
import GenerateButton from '../../components/GenerateButton';
import { delta971000ColorOptions, gildan6400ColorOptions, gildan64v00ColorOptions, shirtSyles, sizeOptions } from '../../constants/Arrays';
import PurchaseButton from '../../components/PurchaseButton';
import PromptInputWithSurpriseMe from '../../components/PromptInputWithSurpriseMe';
import Delta97100 from '../../assets/Delta97100';
import Gildan64v00 from '../../assets/Gildan64v00';
import { ThreeDots } from 'react-loader-spinner';

const CreateShirt: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState<any>({label: "White", value: "#FFFFFF"});
  const [colorOptions, setColorOptions] = useState(gildan6400ColorOptions)
  const [size, setSize] = useState('S')
  const [style, setStyle] = useState(shirtSyles[0])
  const [isGenerateCoverImageLoading, setIsGenerateCoverImageLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sizeArray, setSizeArray] = useState(sizeOptions)

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  const getShirtStyle = () => {
    switch(style){
      case 'Unisex Softstyle T-Shirt': return <Gildan64000 onLoad={() => setIsGenerateCoverImageLoading(false)} color={color.value ?? 'white'} image={image !== '' ? image : defaultImage}/>;
      case 'Unisex Fleece French Terry Crew': return <Delta97100 onLoad={() => setIsGenerateCoverImageLoading(false)} color={color.value ?? 'white'} image={image !== '' ? image : defaultImage}/>;
      case 'Unisex Softstyle V-neck T-shirt': return <Gildan64v00 onLoad={() => setIsGenerateCoverImageLoading(false)} color={color.value ?? 'white'} image={image !== '' ? image : defaultImage}/>
    }
  }

  const getColourOptions = () => {
    switch(style){
      case 'Unisex Softstyle T-Shirt': return gildan6400ColorOptions;
      case 'Unisex Fleece French Terry Crew': return delta971000ColorOptions;
      case 'Unisex Softstyle V-neck T-shirt': return gildan64v00ColorOptions
    }
  }

  useEffect(() => {
    let modifiedSizeOptions = [...sizeOptions];
    if (style === 'Unisex Softstyle V-neck T-shirt'){
      modifiedSizeOptions = modifiedSizeOptions.filter((size) => size !== '3XL');
    }
    setSizeArray(modifiedSizeOptions);
    const colors = getColourOptions()
    if(!colors) return
    setColorOptions(colors)
    setColor(colors[0])
  },[style])

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
        {isGenerateCoverImageLoading && (
        <div className="phone-loading-indicator">
          <ThreeDots
            height="50"
            width="200"
            color="orange"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      )}
        {getShirtStyle()}
      </div>

      <div className="cover-side-options">
        <div style={{fontWeight: 'bold', marginBottom: '15px', backgroundColor: 'white', padding: 5, borderRadius: 10}}>Colour: {color.value}</div>
        <section className="color-picker">
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={colorOptions}
          onChange={(value) => setColor(value)}
          value={color.value}
          placeholder="Select an option"
          arrowClosed={<div style={{position: 'absolute', top: 5, right: 10, color: 'orange'}}>v</div>}
          arrowOpen={<div style={{position: 'absolute', top: 5, right: 10, color: 'orange'}}>^</div>}
        />
        </section>
        <div style={{fontWeight: 'bold', marginBottom: '15px', backgroundColor: 'white', padding: 5, borderRadius: 10}}>Size:</div>
        <section className="color-picker">
        <ReactDropdown
          className="dropdown"
          arrowClassName="dropdown-option"
          options={sizeArray}
          onChange={(value) => setSize(value.value)}
          value={size}
          placeholder="Select an option"
        />
        </section>
        <div style={{fontWeight: 'bold', marginBottom: '15px', backgroundColor: 'white', padding: 5, borderRadius: 10}}>Style:</div>
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
    <div style={{width: '50%', fontSize: 16}}>
        <p style={{textAlign: 'start', fontWeight: "bold"}}>About these items:</p>
          <ul>
            <li>Shipped from Australia world-wide</li>
            <li>Focus on sustainable and locally sourced materials</li>
          </ul>
      </div>
    <PurchaseButton
      title="Purchase your shirt!"
      payload={{
        productType: 'Shirt',
        image,
        color: color.label,
        size,
        style
      }}
      />
    </>
  );
};

export default CreateShirt;
