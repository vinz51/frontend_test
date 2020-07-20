import Colors from "styles/colors";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 1em;
  margin: 0;
  padding: 0;
`;

export const Bold = styled.h2`
  font-weight: bold;
  margin: 0;
`;

export const TitleBold = styled(Bold)`
  color: ${Colors.DarkBlue};
`;

export const SubTitleBold = styled(Bold)`
  color: ${Colors.Grey};
  font-size: 11px;
`;

export default TitleBold;
