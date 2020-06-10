import React from "react";
// import { FaCoctail, FaHiking, FaShuttleVan, FaBeer } from "react-icons";

class Title extends React.Component {
  render() {
    return (
      <div className="section-title">
        <h4>{this.props.title}</h4>
        <div></div>
      </div>
    );
  }
}

export default Title;
