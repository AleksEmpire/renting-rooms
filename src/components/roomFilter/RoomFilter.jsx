import React from "react";
import { useContext } from "react";
import { Context } from "../../Context.jsx";
import Title from "../title/Title.jsx";

//{this.props.rooms && this.props.rooms.map(room => console.log("hello",room))}
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomFilter({ rooms }) {
  const context = useContext(Context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = [...people];
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <div className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="capacity"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              onChange={handleChange}
              value={minSize}
            ></input>
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              onChange={handleChange}
              value={maxSize}
            ></input>
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handleChange}
              checked={breakfast}
            ></input>
            <label htmlFor="breakfest">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handleChange}
              checked={pets}
            ></input>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </div>
  );
}
export default RoomFilter;
// HOOK can be called only in function

/*class RoomFilter extends React.Component{
    render(){
         const context = useContext(RoomContext);
         const {
             handleChange, 
             type, 
             capacity, 
             price, 
             minPrice, 
             maxPrice, 
             minSize, 
             maxSize, 
             breakfast, 
             pets
         } = context;
        return(
            <div className='filter-container'>
                <Title title='search rooms'/>
                <form className='filter-form'>
                    <div className='form-group'>
                        <label htmlFor='type'>room type</label>
                        <select name='type' id='type' value={type} className='form-control' onChange={handleChange}></select>
                    </div>
                </form>
                
            </div>
        )
    }
}*/
