import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ReactGA from "react-ga4";
import ImageResizer from "../ImageResizer";

type Props = {
  prompt: string;
  onGenerated: (url: string) => void;
  isGenerateLoading: boolean
  setIsGenerateLoading: (isLoading: boolean) => void
  type: 'image' | 'poem'
};

const GenerateButton = ({ prompt, onGenerated, isGenerateLoading, setIsGenerateLoading, type }: Props) => {

  const onGenerate = async () => {
    window.scrollTo({
      top: 250,
      behavior: 'smooth',
    });
    switch(type){
      case 'image': generateImage(); break;
      case 'poem': generatePoem(); break
    }

  };

  const generateImage = async() => {
    ReactGA.event({
      category: 'Generate Button',
      action: 'Image Generated',
      label: prompt
    })
    setIsGenerateLoading(true);
    if (prompt === "") {
      alert("Please provide a prompt");
      setIsGenerateLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}generateImage`,
        { prompt }
      );
      const { imageUrl } = response.data;
      const resizedImage = ImageResizer({ imageUrl, targetWidth: 300, targetHeight: 300 })
      onGenerated(resizedImage as unknown as string);
    } catch (error) {
      console.error("Error fetching image prompt:", error);
      alert("Error getting image.");
      setIsGenerateLoading(false);
    }
  }

  const generatePoem = async () => {
    onGenerated('void')
  }

  return (
    <button
      className="generate-button"
      onClick={onGenerate}
      disabled={isGenerateLoading}
    >
      {isGenerateLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "10px" }}>Generating</div>
          <ThreeDots
            height="30"
            width="15"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        "Generate"
      )}
    </button>
  );
};

export default GenerateButton;
