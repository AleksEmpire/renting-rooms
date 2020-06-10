import React from "react";
import { Context } from "../../Context.jsx";
import Title from "../title/Title.jsx";
import Loading from "../loading/Loading.jsx";
import Room from "../room/Room.jsx";

class FeatureRooms extends React.Component {
  static contextType = Context;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    //console.log(rooms);
    rooms = rooms.map((room) => <Room key={room.id} room={room} />);
    return (
      <div className="feature-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </div>
    );
  }
}
export default FeatureRooms;
