import styled from "styled-components";
import { Icon } from "@iconify/react";

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Icons = styled(Icon)`
  width: 87px;
  height: 76px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.purple};
`;
