import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import PaymentComplete from "./pages/PaymentComplete";
import TermsAndConditions from "./pages/TermsAndConditions";
import Navbar from "./components/NavBar";
import "./fonts/Sarah-Script-Font.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Charlie.ttf";
import "./fonts/Lauren-Regular.ttf";
import "./fonts/Alexander-Regular.ttf";
import "./App.css";
import Footer from "./components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import ReactGA from "react-ga4";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const App: React.FC = () => {
  const parallax = useRef<IParallax>(null!);
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  const wakeupJeff = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}wakeupJeff`);
      console.log("awake");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    wakeupJeff();
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  }, []);

  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css?family=Heebo:400,700|IBM+Plex+Sans:600"
        rel="stylesheet"
      />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#253237",
          color: "white",
        }}
      >
        <Parallax ref={parallax} pages={4}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#805E73" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#8bd3dd" }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route
                path="/payment-complete/:id"
                element={<PaymentComplete />}
              />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
            </Routes>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </div>
    </Router>
  );
};

export default App;
