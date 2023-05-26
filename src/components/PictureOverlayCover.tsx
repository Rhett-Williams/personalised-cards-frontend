import React from 'react';
import defaultImage from '../assets/defaultImage.png';

type Props = {
    image: string
}
const PictureOverlayCover: React.FC<Props> = ({image}) => {
  return (
    <div className="background-div">
         <img src={image !== '' ? image : defaultImage} alt="Overlay Image" className="overlay-image" style={{opacity: image !== '' ? 1 : 0.6}}/>
    </div>
  );
};

export default PictureOverlayCover;