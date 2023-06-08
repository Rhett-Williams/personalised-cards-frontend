import React from 'react';

interface ImageCardProps {
  name: string;
  image: string;
  onClick: () => void
  style: any
}

const CreateDisplayWindow: React.FC<ImageCardProps> = ({ name, image, onClick, style }) => {
  return (
    <div className="display-window-image-card" style={style} onClick={onClick}>
      <div className="display-window-image-container">
        <img src={image} alt={name} className="display-window-image" />
      </div>
      <div className="display-window-image-text">{name}</div>
    </div>
  );
};

export default CreateDisplayWindow;