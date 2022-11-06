import styled from "styled-components";

export const WaveContainer = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin-top: -82px;
  transform: rotate(180deg);
  z-index: -1;
`;
export const WaveSvg = styled.svg`
  display: block;
  width: calc(100% + 1.3px);
  height: 82px;
`;
export const WavePath = styled.path`
  fill: ${(props) => props.theme.mainBackground};
`;
export const WavePathAlt = styled(WavePath)`
  fill: ${(props) => props.theme.secondaryBackground};
`;
