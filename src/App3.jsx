import { useState } from "react";
import Header from "./header";
import Nav from "./Nav";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
import BusinessCard from "./BusinessCard"; // import the BusinessCard component
import "./styles2.css";
import Data from "./Data";

const businessCards = [
  {
    name: "Jorge",
    email: "jorge@example.com",
    tel: "111-1111",
  },
  {
    name: "Shankar",
    email: "shankar@example.com",
    tel: "222-2222",
  },
  {
    name: "Lucian",
    email: "lucian@example.com",
    tel: "333-3333",
  },
  {
    name: "Ali",
    email: "ali@example.com",
    tel: "444-4444",
  },
  {
    name: "Jason",
    email: "jason@example.com",
    tel: "555-5555",
  },
];

function BusinessCardContainer(props) {
  const [show, setShow] = useState(true);

  const handleRemoveCard = () => {
    setShow(false);
  };

  return (
    <div>
      {show && <BusinessCard {...props} />}
      <button onClick={handleRemoveCard}>Remove</button>
    </div>
  );
}

function App() {
  // ...
  return (
    <div>
      <Header />
      <Nav />
      <div className="main-content">
        <div className="columns-container">
          <Main appname={Data().name} />
          <Aside />

          {/* Render the BusinessCard components here */}
          <div className="business-cards">
            <BusinessCardContainer
              name="Jorge"
              email="jorge@example.com"
              tel="111-1111"
            />
            <BusinessCardContainer
              name="Shankar"
              email="shankar@example.com"
              tel="222-2222"
            />
            <BusinessCardContainer
              name="Lucian"
              email="lucian@example.com"
              tel="333-3333"
            />
            <BusinessCardContainer
              name="Ali"
              email="ali@example.com"
              tel="444-4444"
            />
            <BusinessCardContainer
              name="Jason"
              email="jason@example.com"
              tel="555-5555"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
