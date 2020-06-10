import React from "react";
import Room from "../room/Room.jsx";

class RoomList extends React.Component {
  render() {
    if (this.props.rooms.length === 0) {
      return (
        <div className="empty-search">
          <h3>unfortuantly no rooms matched your search parameters</h3>
        </div>
      );
    }
    return (
      <div className="roomslist">
        <div className="roomslist-center">
          {this.props.rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </div>
    );
  }
}
export default RoomList;
