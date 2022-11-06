import styled from "styled-components";

export const SectionHeading = styled.h1`
  font-size: ${(props) => props.theme.fonts.fontSizes.large};
  font-weight: 700;
  text-align: center;
  display: block;
  width: 100%;
  margin-top: 0.625rem;
  margin-bottom: 3rem;
`;

export const Hyperlink = styled.a`
  color: ${(props) => props.theme.hyperlink};
  font-size: 2rem;
  text-decoration: none;
  transition: filter 200ms ease-in-out;
  &:hover,
  :active {
    filter: brightness(130%);
  }
`;
