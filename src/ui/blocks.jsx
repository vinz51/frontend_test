import styled from "styled-components";
import Sizes from "styles/sizes";

const MainContainer = styled.div`
  @media screen and (min-width: ${Sizes.SM}) {
    display: flex;
    height: 500px;
    margin: 70px auto 0;
    width: 80%;
  }
`;

export default MainContainer;
