import React from "react";
import defaultImage from "../assets/defaultImage.png";

type Props = {
  image: string;
  text: string;
  onChange: (value: string) => void;
  font: string;
  fontColor: string
};

const PictureOverlayInner = ({ image, text, onChange, font, fontColor }: Props) => {
  return (
    <div className="picture-overlay-inner">
      <div className="inner-container">
        <img
          src={image !== "" ? image : defaultImage}
          alt="Overlay Image"
          className="inner-image"
          style={{ opacity: image !== "" ? 1 : 0.6 }}
        />
        <div
          style={{
            height: "30vw",
            minHeight: "200px",
            width: "5px",
            backgroundColor: "grey",
          }}
        />
        <textarea
          placeholder="Write a poem or message here or generate one based on the filters below. Or click surprise me for a completely random poem."
          className="inner-text-input"
          style={{fontFamily: font, fontSize: '30px', color: fontColor}}
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PictureOverlayInner;
