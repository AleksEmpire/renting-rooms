import React, { Component } from "react";
import Hero from "../components/styledHero/StyledHero.js";
import Banner from "../components/banner/Banner.jsx";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <Hero>
          <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn-primary">
              return to home
            </Link>
          </Banner>
        </Hero>
      </div>
    );
  }
}
export default Error;
