import styled from "styled-components";
import arrowDown from "../public/arrow-down.svg";

export const LangSelectContainer = styled.div`
  margin-right: auto;
  margin-left: 20px;
  position: relative;
  background-color: ${(props) => props.theme.white};
  width: auto;
  float: left;
  max-width: 100%;
  border-radius: 2px;
`;
export const Selector = styled.select`
  font-size: 1rem;
  font-weight: 200;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: right 5px center;
  background-size: 18px;

  &:active,
  :focus {
    outline: none;
    box-shadow: none;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #aaa;
  }
`;
