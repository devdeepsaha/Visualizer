import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Contact from './js/Contact';
import Home from './js/Home'; // Import Home.js
import Sorting from './js/SortingVisualizer';
import backgroundVideo from "./assets/videos/background.mp4";
import TermsAndConditions from "./js/TermsAndConditions";
import PrivacyPolicy from "./js/PrivacyPolicy";


const App = () => {
  const [isExpanded, setIsExpanded] = useState(false); // To track if the search button is expanded
  const [searchTerm, setSearchTerm] = useState(""); // To track the input value
  const inputRef = useRef(null);

  const location = useLocation();

  const handleToggle = () => {
    setIsExpanded(true); // Toggle expansion
  };

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term on typing
  };

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleBlur = () => {
    if (searchTerm === "") setIsExpanded(false);
  };

  return (
    <div className="app">
           <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={backgroundVideo} type="video/mp4" />
          </video></div>
    
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src={require('./assets/images/logo.png')} alt="logo" className="logo" />
        </div>
        <nav className="navbar">
          <Link to="/Contact">CONTACT US</Link>
          <Link to="/">HOME</Link> {/* Link to homepage */}

          <div className="search-container">
            <div
              className={`search-button ${isExpanded ? "expanded" : ""}`}
              onClick={handleToggle}
            >
              {isExpanded ? (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onBlur={handleBlur}
                  ref={inputRef}
                  placeholder="Search..."
                  className="search-input"
                />
              ) : (
                "SEARCH"
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/Contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/sorting" element={<Sorting />} /> {/* Sorting route */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
</div>



  );
};

export default App;
