import { useState } from "react";
import Header from "./header";
import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
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

  /* const data = Data(); */
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
        </div>
        {/* <img src={images[currentImageIndex]} alt="Carousel image" />
        <button onClick={handleNextImage}>Next</button> */}
        {/* <img src={myImage} alt="coding" className="my-image" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;

{
  /* <div className="columns">
        <Main />
        <Aside />
        <Hello name="Joe" />
      </div> */
}
