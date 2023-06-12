import React from 'react';
import defaultImage from '../assets/defaultImage.png';
import { ThreeDots } from 'react-loader-spinner';

type Props = {
    image: string
    backgroundColor: string
    onLoad: () => void
    isLoading: boolean
}

const PictureOverlayCover: React.FC<Props> = ({ image, backgroundColor, onLoad, isLoading}) => {
  return (
    <div className="background-div" style={{backgroundColor}}>
        <div style={{ width: '21vw'}}/>
          {isLoading && <div className='card-loading-indicator'>
            <ThreeDots
              height="50"
              width="200"
              color="orange"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>}
         <img src={image} onLoad={onLoad} className="overlay-image" />
          {image === '' && <img src={defaultImage} alt="Overlay Image" className="overlay-image" style={{opacity: 0.6}}/>}
    </div>
  );
};

export default PictureOverlayCover;