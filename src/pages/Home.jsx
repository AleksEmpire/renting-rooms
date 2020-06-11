import React, { Component } from "react";
import Hero from "../components/hero/Hero.jsx";
import Banner from "../components/banner/Banner.jsx";
import { Link } from "react-router-dom";
import Services from "../components/services/Services.jsx";
import FeaturedRooms from "../components/featuredRooms/FeatureRooms.jsx";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero hero="defaultHero">
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </React.Fragment>
    );
  }
}
export default Home;
