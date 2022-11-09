import styled from "styled-components";
import ReactFlagsSelect from "react-flags-select";

export const ReactFlags = styled(ReactFlagsSelect)`
  padding-bottom: 0;
  & button {
    border: none;
    &::after {
      border-top-color: ${(props) => props.theme.white};
      transition: border-top-color 250ms ease-in-out;
    }
    &:hover::after {
      border-top-color: ${(props) => props.theme.purple};
    }
    &[aria-expanded="true"]:after {
      border-bottom-color: ${(props) => props.theme.white};
      transition: border-bottom-color 250ms ease-in-out;
    }
  }
  & ul {
    background: ${(props) => props.theme.white};
  }
`;

export const LangSelectContainer = styled.div`
  margin-right: auto;
  margin-left: 20px;
  position: relative;
  //background-color: ${(props) => props.theme.white};
  width: auto;
  float: left;
  max-width: 100%;
  border-radius: 2px;
`;
