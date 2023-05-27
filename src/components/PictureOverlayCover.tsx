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
         {image !== '' ? <img src={image} onLoad={onLoad} alt="Overlay Image" className="overlay-image" /> :
         <img src={defaultImage} alt="Overlay Image" className="overlay-image" style={{opacity: 0.6}}/>}
    </div>
  );
};

export default PictureOverlayCover;