import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../style.css'
import Logo from "../assets/Logo.png"
import HeaderIllustration from "../assets/switchImages/header-illustration-light.svg"
import HeroMediaIllustration from "../assets/switchImages/hero-media-illustration-light.svg"
import HeroMedia from "../assets/switchImages/hero-media-light.svg"
import FeatureIllustration from "../assets/switchImages/features-illustration-light.svg"
import FeatureBox from "../assets/switchImages/features-box-light.svg"
import FeatureIllustrationTop from "../assets/switchImages/features-illustration-top-light.svg"
import Feature03 from "../assets/switchImages/feature-03-light.svg"
import Feature02 from "../assets/switchImages/feature-02-light.svg"
import Feature01 from "../assets/switchImages/feature-01-light.svg"
import { Carousel } from 'react-responsive-carousel';
import inspo1 from '../assets/Inspo1.png'
import inspo2 from '../assets/Inspo2.png'
import inspo3 from '../assets/Inspo3.png'
import inspo4 from '../assets/Inspo4.png'

const Home: React.FC = () => {
  return (
      <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pixel Perfect Delights</title>
  <link
    href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600"
    rel="stylesheet"
  />
  <div className="body-wrap boxed-container">
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0">Welcome to Pixel Perfect Delights!</h1>
              <p className="hero-paragraph">
                Indulge in the world of AI-generated images and let your imagination soar. Explore our online store and discover a universe of pixel perfect delights. Whether you're shopping for yourself or searching for a unique gift, our collection will ignite your senses and leave you craving for more.
              </p>
              <div className="hero-cta">
                <a className="button button-primary" href="#">
                  Get Started
                </a>
              </div>
            </div>
            <div className="hero-media">
              <div className="header-illustration">
                <img
                  className="header-illustration-image"
                  src={HeaderIllustration}
                  alt="Header illustration"
                />
              </div>
              <div className="hero-media-illustration">
                <img
                  className="hero-media-illustration-image"
                  src={HeroMediaIllustration}
                  alt="Hero media illustration"
                />
                
              </div>
              <div className="hero-media-container">
                <img
                  className="hero-media-image"
                  src={HeroMedia}
                  alt="Hero media"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features section">
        <div className="container">
          <div className="features-inner section-inner has-bottom-divider">
            <div className="features-header text-center">
              <div className="container-sm">
                <h2 className="section-title mt-0">Our Products</h2>
                <p className="section-paragraph">
                  At Pixel Perfect Delights, we believe that art should be accessible to all. That's why we offer our AI-generated creations at affordable prices, without compromising on quality. We take pride in providing you with top-notch products that are crafted with attention to detail and delivered with care.
                </p>
                <div className="features-image">
                  <img
                    className="features-illustration"
                    src={FeatureIllustration}
                    alt="Feature illustration"
                  />
                  <img
                    className="features-box"
                    src={FeatureBox}
                    alt="Feature box"
                  />
                  <img
                    className="features-illustration"
                    src={FeatureIllustrationTop}
                    alt="Feature illustration top"
                  />
                </div>
              </div>
            </div>
            <div className="features-wrap">
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src={Feature01}
                      alt="Feature 01"
                    />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title mt-0">Delightfully Simple</h3>
                    <p className="text-sm mb-0">
                      Creating your own custom product is delightfully simple with our intuitive web app. In just a few easy steps, you can bring your vision to life and design a one-of-a-kind masterpiece that perfectly reflects your style and personality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src={Feature02}
                      alt="Feature 02"
                    />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title mt-0">Unique</h3>
                    <p className="text-sm mb-0">
Experience the magic of AI-generated art where every design is a unique masterpiece. With our cutting-edge technology, each creation at Pixel Perfect Delights is one-of-a-kind, ensuring that you own something truly exceptional and extraordinary.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <img
                      src={Feature03}
                      alt="Feature 03"
                    />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title mt-0">No creating accounts</h3>
                    <p className="text-sm mb-0">
                      Say goodbye to lengthy sign-up processes and complicated transactions. At Pixel Perfect Delights, we believe in making your shopping experience hassle-free. With no sign-up required, you can dive right into exploring our incredible collection. Once you've found your perfect AI-generated design, our simple pay-and-receive system ensures a seamless process from checkout to your doorstep. Sit back, relax, and let us take care of the rest, delivering your delightful purchase right to your door.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className="container-sm" style={{background: 'linear-gradient(to bottom, rgba(83,95,215,0), rgba(83,95,215,0.04))'}}>
          <div className="cta-inner section-inner" style={{paddingBottom: 0}}>
            <div className="cta-header text-center" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <h2 className="section-title mt-0" style={{marginBottom: 30}}>Inspiration:</h2>
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
          </div>
        </div>
      <section className="cta section">
        <div className="container-sm">
          <div className="cta-inner section-inner">
            <div className="cta-header text-center">
              <h2 className="section-title mt-0">Get Creative</h2>
              <p className="section-paragraph">
                Click get started to begin creating something truly unique!
              </p>
              <div className="cta-cta">
                <a className="button button-primary" href="/create">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</>
  );
};

export default Home;
