import React from "react";
import Title from "../title/Title.jsx";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "free coctails",
          info:
            "lorem ipsum dolor sit amet consectetur adispicing elit. Magni, corporis!",
        },
        {
          icon: <FaHiking />,
          title: "endless hiking",
          info:
            "lorem ipsum dolor sit amet consectetur adispicing elit. Magni, corporis!",
        },
        {
          icon: <FaShuttleVan />,
          title: "free shuttle",
          info:
            "lorem ipsum dolor sit amet consectetur adispicing elit. Magni, corporis!",
        },
        {
          icon: <FaBeer />,
          title: "strongest beer",
          info:
            "lorem ipsum dolor sit amet consectetur adispicing elit. Magni, corporis!",
        },
      ],
    };
  }
  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((serviceItem, index) => {
            return (
              <article key={index} className="service">
                <span>{serviceItem.icon}</span>
                <h6>{serviceItem.title}</h6>
                <p>{serviceItem.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Services;
