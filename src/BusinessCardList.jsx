import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessCardList(props) {
  return (
    <div>
      {props.cards.map((card, index) => (
        <BusinessCard
          key={index}
          name={card.name}
          email={card.email}
          tel={card.tel}
        />
      ))}
    </div>
  );
}

export default BusinessCardList;
