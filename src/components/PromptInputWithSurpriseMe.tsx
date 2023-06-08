import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

type Props = {
  prompt: string;
  setPrompt: (value: string) => void;
  title: string
};

const PromptInputWithSurpriseMe = ({ prompt, setPrompt, title }: Props) => {
  const [isSurpriseMeLoading, setIsSurpriseMeLoading] = useState(false);

  const onSurpriseMe = async () => {
    setIsSurpriseMeLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}generateImagePrompt`
      );
      const prompt = response.data.prompt.replaceAll('"', "");
      setPrompt(prompt);
    } catch (error) {
      console.error("Error fetching image prompt:", error);
    }
    setIsSurpriseMeLoading(false);
  };

  return (
    <>
      <div className="cover-form-prompt">
        <span>{title}</span>
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
      <div style={{ fontSize: 12, marginTop: 10 }}>
        <div style={{ fontWeight: "bold" }}>Hint:</div> For the best results,
        trying being specific with the resolution or adding an art style. E.g:
        Pixar 3D render, 4k
      </div>
    </>
  );
};

export default PromptInputWithSurpriseMe;
