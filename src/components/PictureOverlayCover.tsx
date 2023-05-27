import React from 'react';
import defaultImage from '../assets/defaultImage.png';

type Props = {
    image: string
    backgroundColor: string
    onLoad: () => void
}

const PictureOverlayCover: React.FC<Props> = ({image, backgroundColor, onLoad}) => {
  return (
    <div className="background-div" style={{backgroundColor}}>
         <img src={image !== '' ? image : defaultImage} onLoad={onLoad} alt="Overlay Image" className="overlay-image" style={{opacity: image !== '' ? 1 : 0.6}}/>
    </div>
  );
};

export default PictureOverlayCover;