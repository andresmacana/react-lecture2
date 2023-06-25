import { useState } from "react";
import React from "react";
import Header from "./header";
import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import BusinessCard from "./BusinessCard"; // import the BusinessCard component
import "./styles2.css";
import Data from "./Data";

const businessCards = [
  { name: "John Doe", email: "john.doe@example.com", tel: "555-1234" },
  { name: "Jane Doe", email: "jane.doe@example.com", tel: "555-5678" },
  { name: "Bob Smith", email: "bob.smith@example.com", tel: "555-4321" },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    tel: "555-8765",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    tel: "555-1111",
  },
];

function App() {
  const data = Data();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % businessCards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (currentCardIndex - 1 + businessCards.length) % businessCards.length
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
          {/* Render the BusinessCard carousel here */}
          <h2>Business Cards</h2> {/* Add a title here */}
          <div className="carousel">
            <button onClick={handlePrevCard}>Prev</button>
            <BusinessCard {...businessCards[currentCardIndex]} />
            <button onClick={handleNextCard}>Next</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  /* return (
    <div>
      <Header />
      <Nav />
      <div className="main-content">
        <div className="columns-container">
          <Main appname={Data().name} />
          <Aside />

          
          <div className="carousel">
            <button onClick={handlePrevCard}>Prev</button>
            <BusinessCard {...businessCards[currentCardIndex]} />
            <button onClick={handleNextCard}>Next</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ); */
}

export default App;
