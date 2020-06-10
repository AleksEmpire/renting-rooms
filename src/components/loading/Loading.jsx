import React from "react";
import loadingGif from "../../images/gif/loading-arrow.gif";

class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <h4>rooms data loading</h4>
        <img src={loadingGif} alt="Loading Gif" />
      </div>
    );
  }
}

export default Loading;
