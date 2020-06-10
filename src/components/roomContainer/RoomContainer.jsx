import React, { Component } from "react";
// import React from "react";
import RoomFilter from "../roomFilter/RoomFilter.jsx";
import RoomList from "../roomList/RoomList.jsx";
// import { withRoomConsumer } from "../../Context";
import { Context } from "../../Context.jsx";
import Loading from "../loading/Loading.jsx";
//import {withRoomConsumer} from '../Context';

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   console.log(sortedRooms);
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <div className="rooms-container">
//       <RoomFilter rooms={rooms} />
//       <RoomList rooms={sortedRooms} />
//     </div>
//   );
// }

// export default withRoomConsumer(RoomContainer);

export default class RoomContainer extends Component {
  static contextType = Context;
  render() {
    const { loading, sortedRooms, rooms } = this.context;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="rooms-container">
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </div>
    );
  }
}
