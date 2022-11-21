import './assets/css/App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ColorsMobile from './components/ColorsMobile';

function App() {
  const [color, setColor] = useState('#FFF');
  var tinycolor = require("tinycolor2");
  var selectedColor = tinycolor(color);

  useEffect(() => {
      const githubIcon = document.querySelector("#githubIcon");
      const linkedinIcon = document.querySelector("#linkedinIcon");
      const titles = document.querySelectorAll(".title");
      const text = document.querySelectorAll(".text");
      const svg = document.querySelectorAll(".path");
      if (selectedColor.isLight()) {
        document.body.style.backgroundColor = selectedColor;
        titles.forEach(element => {
          element.style.color = "#1A1A1A";
        });
        text.forEach(element => {
            element.style.color = "#1A1A1A";
        });
        svg.forEach(element => {
            element.style.fill = "#1A1A1A";
            element.style.stroke = "#1A1A1A";
        });
        githubIcon.style.fill = "#1A1A1A";
        linkedinIcon.style.fill = "#1A1A1A";
      } else {
        document.body.style.backgroundColor = selectedColor;
        titles.forEach(element => {
          element.style.color = "#FFFFFF";
        });
        text.forEach(element => {
            element.style.color = "#FFFFFF";
        });
        svg.forEach(element => {
            element.style.fill = "#FFFFFF";
            element.style.stroke = "#FFFFFF";
        });
        githubIcon.style.fill = "#FFFFFF";
        linkedinIcon.style.fill = "#FFFFFF";
      }
    });


  return (
    <div className="App d-flex flex-column h-100">
      <Header />
      <Main setColor={setColor} />
      <Footer />
      <ColorsMobile setColor={setColor} />
    </div>
  );
}

export default App;