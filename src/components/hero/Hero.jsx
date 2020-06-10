import React from "react";

class Hero extends React.Component {
  render() {
    const { children, hero } = this.props;
    return <header className={hero}>{children}</header>;
  }
}
Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
