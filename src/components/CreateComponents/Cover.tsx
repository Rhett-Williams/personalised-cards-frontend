import React, { useEffect, useState } from "react";
import PictureOverlay from "../PictureOverlayCover";
import GenerateButton from "../GenerateButton";
import PromptInputWithSurpriseMe from "../PromptInputWithSurpriseMe";

type Props = {
  prompt: string;
  setPrompt: (value: string) => void;
  onSetCoverImage: (url: string) => void
  coverImage: string;
  isGenerateImageLoading: boolean
  setIsGenerateImageLoading: (isLoading: boolean) => void
  onNextPress: () => void
  coverColor: string
  setCoverColor: (colour: string) => void
  onLoad: () => void
};

const Cover: React.FC<Props> = ({
  prompt,
  setPrompt,
  onSetCoverImage,
  coverImage,
  isGenerateImageLoading,
  setIsGenerateImageLoading,
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

      <PictureOverlay image={coverImage} backgroundColor={coverColor} onLoad={onLoad}/>
      <div className="cover-form-container">
        <PromptInputWithSurpriseMe title="Image prompt:" prompt={prompt} setPrompt={setPrompt}/>
        <GenerateButton type='image' prompt={prompt} onGenerated={onSetCoverImage} isGenerateLoading={isGenerateImageLoading} setIsGenerateLoading={setIsGenerateImageLoading}/>
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
