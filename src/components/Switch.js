import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { Icon } from "@iconify/react";
import styled, { keyframes } from "styled-components";
import { device } from "../componentsStyled/mediaQueriesBreakPoints";

const rotate = keyframes`
    from {
      transform: rotate(80deg);
    }
    to {
      transform: rotate(0deg);
    }
    `;
const Button = styled.button`
  margin-right: 30px;
  margin-left: 30px;
  background: none;
  border: none;
  border-radius: 50%;
  text-transform: none;
  box-shadow: none;
  cursor: pointer;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 1s linear;
  transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95) 150ms;
  @media ${device.tabletS} {
    margin: 0 2.5rem 0 1rem;
  }
  &:hover,
  :active {
    & :first-child {
      color: ${(props) => props.theme.purple};
    }
  }
  & :first-child {
    color: white;
    width: 24px;
    height: 24px;
    transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95) 250ms;
  }
`;

const Switch = () => {
  const contextState = useContext(themeContext);

  const onToggle = () => {
    //send state of toggle btn to the context
    contextState.setIsToggled(!contextState.isToggled);
  };

  return contextState.isToggled ? (
    <Button onClick={onToggle}>
      <Icon icon="ph:sun-duotone" />
    </Button>
  ) : (
    <Button onClick={onToggle}>
      <Icon icon="ph:moon-duotone" />
    </Button>
  );
};

export default Switch;
