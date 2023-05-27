import React, { useEffect, useState } from "react";
import PictureOverlay from "../PictureOverlayCover";
import { ThreeDots } from "react-loader-spinner";
import { HexColorPicker } from "react-colorful";

type Props = {
  prompt: string;
  setPrompt: (value: string) => void;
  onGenerate: () => void;
  coverImage: string;
  handleSurpriseMe: () => void;
  isSurpriseMeLoading: boolean;
  isGenerateImageLoading: boolean
  onNextPress: () => void
  coverColor: string
  setCoverColor: (colour: string) => void
  onLoad: () => void
};

const Cover: React.FC<Props> = ({
  prompt,
  setPrompt,
  onGenerate,
  coverImage,
  handleSurpriseMe,
  isSurpriseMeLoading,
  isGenerateImageLoading,
  onNextPress,
  coverColor,
  setCoverColor,
  onLoad
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={`fade-in-right ${isVisible ? "visible" : "hidden"}`}
      style={{marginBottom: 70}}
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div className="cover-side-options">
      <div style={{paddingLeft: 10}}>
        <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Page colour:</div>
        <HexColorPicker
          style={{ width: "100px", height: "100px" }}
          color={coverColor}
          onChange={setCoverColor}
        />
        <div>{coverColor}</div>
        </div>
      </div>
      <PictureOverlay image={coverImage} backgroundColor={coverColor} onLoad={onLoad}/>
      <div className="cover-form-container">
        <div className="cover-form-prompt">
          <span>Image prompt:</span>
          <button
            className="cover-form-surprise-button"
            onClick={handleSurpriseMe}
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
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div style={{fontSize: 12, marginTop: 10}}><div style={{fontWeight: 'bold'}}>Hint:</div> For the best results, trying being specific with the resolution or adding an art style. E.g: Pixar 3D render, 4k</div>
        <button className="generate-button" onClick={onGenerate}>
          {isGenerateImageLoading ? (
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
              <div style={{marginRight: '10px'}}>Generating</div>
              <ThreeDots
                height="15"
                width="15"
                radius="9"
                color="orange"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>):'Generate'}
        </button>
      </div>
      <div
          className="create-button"
          style={{marginTop: '20px'}}
          onClick={onNextPress}
        >
          {'Next >>'}
        </div>
    </div>
  );
};

export default Cover;
