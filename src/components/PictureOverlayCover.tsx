import React from 'react';
import defaultImage from '../assets/defaultImage.png';
import UnclickableImage from './UnclickableImage';

type Props = {
    image: string
    backgroundColor: string
    onLoad: () => void
}

const PictureOverlayCover: React.FC<Props> = ({image, backgroundColor, onLoad}) => {
  return (
    <div className="background-div" style={{backgroundColor}}>
        <div style={{ width: '21vw'}}/>
         {/* <img src={image} onLoad={onLoad} className="overlay-image" /> */}
         <UnclickableImage image={image} className='pverlay-image'/>
          {image === '' && <img src={defaultImage} alt="Overlay Image" className="overlay-image" style={{opacity: 0.6}}/>}
    </div>
  );
};

export default PictureOverlayCover;