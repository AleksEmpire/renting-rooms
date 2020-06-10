import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;
  color: red;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
