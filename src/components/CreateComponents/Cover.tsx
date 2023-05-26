import React, { useEffect, useState } from "react";
import PictureOverlay from "../PictureOverlayCover";
import { ThreeDots } from "react-loader-spinner";

type Props = {
  prompt: string;
  setPrompt: (value: string) => void;
  onGenerate: () => void;
  coverImage: string;
  handleSurpriseMe: () => void;
  isSurpriseMeLoading: boolean;
  isGenerateImageLoading: boolean
  onNextPress: () => void
};

const Cover: React.FC<Props> = ({
  prompt,
  setPrompt,
  onGenerate,
  coverImage,
  handleSurpriseMe,
  isSurpriseMeLoading,
  isGenerateImageLoading,
  onNextPress
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
      <PictureOverlay image={coverImage} />
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
