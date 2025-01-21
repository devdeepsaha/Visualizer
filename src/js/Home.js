import React from "react";
import dev from '../assets/images/devdeep.png';
import saheli from '../assets/images/saheli.png';
import santanu from '../assets/images/santanu.png';
import Sort from '../assets/images/sort.svg';
import Tree from '../assets/images/tree.svg'; 
import Linked from '../assets/images/linked-list.svg'; 
import Graph from '../assets/images/graph.svg';
import User from '../assets/images/user.svg';
import Free from '../assets/images/free.svg';
import Easy from '../assets/images/easy.svg';
import '../scss/Home.scss';
import { Link } from "react-router-dom";


// Scroll functionality
const handleScroll = (id) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <div className="home">
      <div className="background-gradient1"></div>

      {/* Navigation Section */}
        <nav className="home-navbar">
        <a href="#" onClick={() => handleScroll("features")}>FEATURES</a>
        <a href="#" onClick={() => handleScroll("topics")}>TOPICS</a>
        <a href="#" onClick={() => handleScroll("about")}>ABOUT</a>
      </nav>
      

      {/* Hero Section */}
      <section className="hero">
        <h1>
          WHERE CODING <p>MEETS</p> <div><p>CLARITY</p></div>
        </h1>
      </section>

      {/* Features Section with Rotating Cards */}
      <section className="features" id="features">
        <div className="feature-card">
          <div className="feature-card-inner">
            {/* Front Side */}
            <div className="feature-card-front">
            <img src={User} alt="User" className="svgcard"/>
              <h3>User-friendly Interface</h3>
            </div>
            {/* Back Side */}
            <div className="feature-card-back">
              <p>Navigate effortlessly with our clean and intuitive design.</p>
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-card-inner">
            {/* Front Side */}
            <div className="feature-card-front">
            <img src={Easy} alt="Easy" className="svgcard"/>
              <h3>Easy to Use</h3>
            </div>
            {/* Back Side */}
            <div className="feature-card-back">
              <p>Solve complex coding problems in just a few clicks.</p>
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-card-inner">
            {/* Front Side */}
            <div className="feature-card-front">
            <img src={Free} alt="Free" className="svgcard"/>
              <h3>Completely Free</h3>
            </div>
            {/* Back Side */}
            <div className="feature-card-back">
              <p>Access all features with zero cost, forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="topics" id="topics">
      <Link to="/sorting">
    <button className="topic-button sorting">
    <img src={Sort} alt="Sorting" className="svg" />
      Sorting</button>
  </Link>
        <button className="topic-button graph">
        <img src={Graph} alt="Graph" className="svg"/>
          Graph</button>
        <button className="topic-button linked-list">
        <img src={Linked} alt="Linked List" className="svg"/>Linked List</button>
        <button className="topic-button tree">
        <img src={Tree} alt="Tree" className="svg"/>Tree</button>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          We are a team of three passionate coders on a mission to make learning and solving coding problems easier and more fun.
          Our platform offers tools like a sorting visualizer, calculators for coding challenges, and much more to help you understand algorithms and solve problems efficiently.
          We believe in simplicity, accessibility, and innovation, which is why our website is user-friendly, easy to use, and completely free.
        </p>
      </section>

      {/* Team Section */}
      <section className="team" id="team">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member-left">
            <h2>Devdeep Saha</h2>
            <h3>Designer, FrontEnd</h3>
            <p>I love my Job!</p><img src={dev} alt="Dev" className="Dev" />
          </div>
          <div className="team-member-middle">
            <h2>Saheli Mondal</h2>
            <h3>UI/UX, FrontEnd</h3>
            <p>I Hate The Designer</p>
            <img src={saheli} alt="Saheli" className="Saheli" />
          </div>
          <div className="team-member-right">
            <h2>Santanu Pramanik</h2>
            <h3>BackEnd</h3>
            <p>I hate them both.</p>
            <img src={santanu} alt="Santanu" className="Santanu" />
          </div>
        </div>
      </section>

      <section className="end" id="end">
          <div className="ending">
            <p>
              © 2024 <a href="#">Visco.com</a> All Rights Reserved.
              <Link to="/terms-and-conditions">
              <button className="terms">Terms of Service</button></Link> 
              <Link to="/privacy-policy">
        <button className="terms">Privacy Policy</button></Link>
            </p>
          </div>
        </section>
      </div>
  );
};

export default Home;
