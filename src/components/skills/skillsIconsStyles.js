import styled from "styled-components";
import { Icon } from "@iconify/react";
import { device } from "../../componentsStyled/mediaQueriesBreakPoints";

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
  @media ${device.tabletS} {
    width: 47px;
    height: 36px;
  }
`;
