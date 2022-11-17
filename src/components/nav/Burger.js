import { useState } from "react";
import styled from "styled-components";
import { device } from "../../componentsStyled/mediaQueriesBreakPoints";
import HorizontalNav from "./HorizontalNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  &:hover {
    & div {
      background-color: ${(props) => props.theme.purple};
    }
  }
  @media ${device.tabletS} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <HorizontalNav open={open} />
    </>
  );
};

export default BurgerMenu;
