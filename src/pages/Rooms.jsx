import React, { Component } from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner.jsx";
import { Link } from "react-router-dom";
import RoomContainer from "../components/roomContainer/RoomContainer.jsx";

class Rooms extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </React.Fragment>
    );
  }
}
export default Rooms;
