import styled from "styled-components";
export const MainWrapper = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
`;
export const MainWrapperAlt = styled(MainWrapper)`
  background-color: ${(props) => props.theme.secondaryBackground};
`;
