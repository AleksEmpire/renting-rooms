import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Banner from "../components/banner/Banner.jsx";
import { Link } from "react-router-dom";
import { Context } from "../Context.jsx";
import StyledHero from "../components/styledHero/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      isModalOpen: false,
      imgOpenSrc: "",
    };
  }

  state = {
    slug: this.props.match.params.slug,
  };

  static contextType = Context;
  modalOpen = (e) => {
    let imgSrc = e.target.src;
    this.setState({
      isModalOpen: true,
      imgOpenSrc: imgSrc,
    });
    console.log("open");
    console.log(`Tip ${typeof e.target.src}`);
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const { imgOpenSrc } = this.state;

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
            {images.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <img src={item} alt={name} onClick={this.modalOpen} />
                  {this.state.isModalOpen && (
                    <Lightbox
                      mainSrc={imgOpenSrc}
                      // nextSrc={item[(index + 1) % item.length]}
                      // prevSrc={item[(index + item.length - 1) % item.length]}
                      onCloseRequest={() =>
                        this.setState({ isModalOpen: false })
                      }
                      // onMovePrevRequest={() =>
                      //   this.setState({
                      //     photoIndex: (index + images.length - 1) % images.length,
                      //   })
                      // }
                      // onMoveNextRequest={() =>
                      //   this.setState({
                      //     photoIndex: (index + 1) % images.length,
                      //   })
                      // }
                    />
                  )}
                </React.Fragment>
              );
            })}
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
