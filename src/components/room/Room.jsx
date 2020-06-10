import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Room extends React.Component {
  render() {
    const { name, slug, images, price } = this.props.room;
    return (
      <div className="room">
        <div className="img-container">
          <img src={images[0]} alt="single-room" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <p className="room-info">{name}</p>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;
