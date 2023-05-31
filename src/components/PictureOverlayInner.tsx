import React from "react";
import defaultImage from "../assets/defaultImage.png";

type Props = {
  image: string;
  text: string;
  onChange: (value: string) => void;
  font: string;
  fontColor: string
  onLoad: () => void
  pageColor: string
};

const PictureOverlayInner = ({ image, text, onChange, font, fontColor, onLoad, pageColor }: Props) => {
  return (
    <div className="picture-overlay-inner" style={{backgroundColor: pageColor ?? 'white'}}>
      <div className="inner-container" style={{ width: '46vw'}}>
        <img
          onLoad={onLoad}
          src={image}
          className="inner-image"
        />
        {image === '' && <img src={defaultImage} alt="Overlay Image" className="inner-image" style={{opacity: 0.6}}/>}
        <div
          style={{
            height: "27vw",
            minHeight: "200px",
            width: "5px",
            backgroundColor: "grey",
          }}
        />
        <textarea
          placeholder="Write a poem or message here or generate one based on the filters below. Or click surprise me for a completely random poem."
          className="inner-text-input"
          style={{fontFamily: font, fontSize: '30px', color: fontColor, width: '50%'}}
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default PictureOverlayInner;
