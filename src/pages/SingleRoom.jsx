import React, { Component } from "react";
import Banner from "../components/banner/Banner.jsx";
import { Link } from "react-router-dom";
import { Context } from "../Context.jsx";
import StyledHero from "../components/styledHero/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  state = {
    slug: this.props.match.params.slug,
  };
  static contextType = Context;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <div className="single-room-wrapper">
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <div className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <div className="description">
              <h3>Details</h3>
              <p>{description}</p>
            </div>
            <div className="info">
              <h6>Price: {price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Max-capacity:{" "}
                {capacity > 1 ? `${capacity}  people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets"}</h6>
              <h6>
                Breakfast:{" "}
                {breakfast
                  ? "free breakfast included"
                  : "breakfast is not free"}
              </h6>
            </div>
          </div>
          <div className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
              {extras.map((extraItem, index) => {
                return <li key={index}>- {extraItem}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleRoom;
