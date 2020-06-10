import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Banner;
