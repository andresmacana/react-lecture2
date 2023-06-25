import React from "react";
import "./BusinessCard.css";

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not Specified",
      email: "Not Specified",
      tel: "Not Specified",
      photo:
        "https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: props.name || state.name,
      email: props.email || state.email,
      tel: props.tel || state.tel,
      photo: props.photo || state.photo,
    };
  }

  render() {
    return (
      <div className="business-card">
        <img src={this.state.photo} alt="Photo" />
        <h2>{this.state.name}</h2>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.tel}</p>
      </div>
    );
  }
}

export default BusinessCard;
