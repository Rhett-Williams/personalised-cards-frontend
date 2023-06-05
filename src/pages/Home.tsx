import React from 'react';
import backgroundImage from '../assets/homeBackgroundImage.jpg'
import homePageImage1 from '../assets/homePageImage1.png'
import OpenAiLogo from '../assets/OpenAI_Logo.svg.png'
import Dalle2Logo from '../assets/download.jpg'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import inspo1 from '../assets/Inspo1.png'
import inspo2 from '../assets/Inspo2.png'
import inspo3 from '../assets/Inspo3.png'
import inspo4 from '../assets/Inspo4.png'
import Side from '../assets/this.png'
import ProgressiveImage from 'react-progressive-image';

const Home: React.FC = () => {
  return (
    <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column',}}>
      <div style={{position: 'absolute', left: 0, width: '100%', overflow: 'hidden', top: '120%', zIndex: -10}}>
        <img style={{ objectFit:'revert'}} src={Side}/>
      </div>
      <img className="side-image-removing" style={{top: '120%'}} src={Side}/>
{/* @ts-ignore */}
      <ProgressiveImage
          src={backgroundImage}
        >
      {(src: any) => <img src={src}  style={{width: '100%'}} alt='home-background-image'/>}
      </ProgressiveImage>
      <div className='home-welcome-container'>
        <div className='home-welcome-header'>Welcome!</div>
        <div className='home-welcome-subtext'>Personalised cards for any age, anyone one and any occasion!</div>
        <Link to="/create">
          <button className='home-create-button'>{'Get started >>'}</button>
        </Link>
      </div>
      <Link to="/create">
        <button className='home-create-button-mobile'>{'Get started >>'}</button>
      </Link>
      <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px', paddingBottom: '30px'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '70%', justifyContent: 'center'}}>
          <div style={{width: '50%', minWidth: '300px', justifyContent: 'center', display: 'flex'}}>
            <img
              style={{width:'50%', objectFit: 'contain'}}
              src={homePageImage1}/>
          </div>
          <div style={{width: '50%', minWidth: '300px', height: '100%', padding: '15px'}}>
              <div style={{fontWeight: 700, fontSize: '30px'}}>How to use:</div>
              <ul>
                <li>1. Navigate to the "Create" page.</li>
                <li>2. Enter a prompt or click "Surprise me" to have AI generate a random cover image idea for your card. You can also choose the card's background colour with the colour picker.</li>
                <li>3. Click next and design the inside of the card. Add an image to the left and write a poem on the right or get AI to generate one based on your chosen specifications.</li>
                <li>4. Click purchase down the bottom and you're all done! Remember the address you use for the payment is where the card will be sent. So if you are sending it straight to the recipient, put down there name on the payment screen!</li>
              </ul>
          </div>
        </div>
        
      </div>
      
      <div style={{width: '90%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>

        <div style={{fontSize: 90, marginRight: 50, fontFamily: 'Alexander'}}>Inspiration:</div>
      <Carousel className='home-carousel'>
                <div>
                    <img src={inspo1} />
                    <p className="legend">Luminous jellyfish dance under a moonlit ocean sky.</p>
                </div>
                <div>
                    <img src={inspo2} />
                    <p className="legend">An underwater adventure with a friendly sea creature, pixel art, 4k</p>
                </div>
                <div>
                    <img src={inspo3} />
                    <p className="legend">pixar 3d render of A treehouse with a secret entrance hidden in the trunk of a large tree.</p>
                </div>
                <div>
                    <img src={inspo4} />
                    <p className="legend">A robot and a dinosaur having a tea party in a futuristic city. vibrant colours, 4k</p>
                </div>
            </Carousel>
            
      </div>
      <Link to="/create">
          <button className='home-create-button-bottom'>{'Get started >>'}</button>
        </Link>
      
      <div className='powered-by-container'>
        <div style={{width: '30%', fontSize: '50px', fontFamily: 'Roboto', fontWeight: 700, marginBottom: 10}}>Powered by:</div>
        <img style={{width: '30%', minWidth: '200px', objectFit: 'contain', marginBottom: 10}} src={OpenAiLogo}/>
        <img style={{width: '30%', objectFit: 'contain', minWidth: '200px'}} src={Dalle2Logo}/>
      </div>
      
    </div>
  );
};

export default Home;