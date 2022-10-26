import styled from "styled-components";
import { Icon } from "@iconify/react";

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Icons = styled(Icon)`
  width: 84px;
  height: 84px;
  color: ${(props) => props.theme.purple};
`;
