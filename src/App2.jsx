import { useState } from "react";
import Header from "./header";
import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import BusinessCard from "./BusinessCard"; // import the BusinessCard component
import "./styles2.css";
import Data from "./Data";

import myImage from "./hack1.jpg";

const images = [
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/102/200/300",
  "https://picsum.photos/id/1025/200/300",
];

function App() {
  const data = Data();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="main-content">
        <div className="columns-container">
          <Main appname={Data().name} />
          <Aside />

          <div className="carousel">
            <button onClick={handlePrevImage}>Prev</button>
            <img src={images[currentImageIndex]} alt="Carousel image" />
            <button onClick={handleNextImage}>Next</button>
          </div>

          {/* Render the BusinessCard components here */}
          <div className="business-cards">
            <BusinessCard
              name="John Doe"
              email="john.doe@example.com"
              tel="555-1234"
            />
            <BusinessCard
              name="Jane Doe"
              email="jane.doe@example.com"
              tel="555-5678"
            />
            <BusinessCard
              name="Bob Smith"
              email="bob.smith@example.com"
              tel="555-4321"
            />
            <BusinessCard
              name="Alice Johnson"
              email="alice.johnson@example.com"
              tel="555-8765"
            />
            <BusinessCard
              name="Charlie Brown"
              email="charlie.brown@example.com"
              tel="555-1111"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
