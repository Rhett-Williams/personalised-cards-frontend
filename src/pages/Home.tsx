import React from 'react';
import backgroundImage from '../assets/homeBackgroundImage.jpg'
import homePageImage1 from '../assets/homePageImage1.png'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column'}}>
      <img src={backgroundImage} style={{width: '100%'}}/>
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
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '70%'}}>
          <img
            style={{width:'50%'}}
            src={homePageImage1}/>
          <div style={{width: '50%', backgroundColor: 'red', height: '100%'}}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;