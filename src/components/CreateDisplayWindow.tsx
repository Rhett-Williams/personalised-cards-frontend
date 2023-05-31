import React from 'react';

interface ImageCardProps {
  name: string;
  image: string;
  onClick: () => void
}

const ImageCard: React.FC<ImageCardProps> = ({ name, image, onClick }) => {
  return (
    <div className="display-window-image-card" onClick={onClick}>
      <div className="display-window-image-container">
        <img src={image} alt={name} className="display-window-image" />
      </div>
      <div className="display-window-image-text">{name}</div>
    </div>
  );
};

export default ImageCard;