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

const Home: React.FC = () => {
  return (
      <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Switch Template</title>
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
              <a href="#">
                <img
                  style={{paddingTop: 20}}
                  className="header-logo-image"
                  src={Logo}
                  alt="Logo"
                />
              </a>
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
              <h1 className="hero-title mt-0">Landing template for startups</h1>
              <p className="hero-paragraph">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="hero-cta">
                <a className="button button-primary" href="#">
                  Buy it now
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
                <h2 className="section-title mt-0">The Product</h2>
                <p className="section-paragraph">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
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
                    <h3 className="feature-title mt-0">Discover</h3>
                    <p className="text-sm mb-0">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua dui.
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
                    <h3 className="feature-title mt-0">Discover</h3>
                    <p className="text-sm mb-0">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua dui.
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
                    <h3 className="feature-title mt-0">Discover</h3>
                    <p className="text-sm mb-0">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua dui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta section">
        <div className="container-sm">
          <div className="cta-inner section-inner">
            <div className="cta-header text-center">
              <h2 className="section-title mt-0">Get it and Switch</h2>
              <p className="section-paragraph">
                Lorem ipsum is common placeholder text used to demonstrate the
                graphic elements of a document or visual presentation.
              </p>
              <div className="cta-cta">
                <a className="button button-primary" href="#">
                  Buy it now
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