import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import Registration  from "./Registration/Registration";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <div>
      
      <Router>
        <Routes>
          <Route path="/oportunidades" element={<Registration />} />
          {/* <Route path="/" element={<Home />   } /> */}
          {/* Add more routes for other components if needed */}
          <Route path='/' element={
            <>
            <Navigation />
            <Header data={landingPageData.Header} />
            {/* <Features data={landingPageData.Features} /> */}
            <About data={landingPageData.About} />
            {/* <Services data={landingPageData.Services} /> */}
            <Gallery data={landingPageData.Gallery} />
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            {/* <Team data={landingPageData.Team} /> */}
            <Contact data={landingPageData.Contact} />
            </>
            
          } ></Route>
          
          
        </Routes>
      </Router>
  </div>
    </div>
  );
};

export default App;
