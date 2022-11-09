import { Link } from "react-scroll";
import styled from "styled-components";

export const BtnGreenScroll = styled(Link)`
  display: inline-block;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  transition: filter 0.2s ease-in-out;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.green};
  &:hover {
    filter: brightness(80%) contrast(200%);
  }
`;
