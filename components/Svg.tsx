import styled from "styled-components";

interface StyledSvgProps {
  readonly width: string;
  readonly height: string;
  fill?: string;
  mr?: string;
  mt?: string;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  fill: ${(props) => props.fill};
  margin-right: ${props =>props.mr};
  margin-top: ${props =>props.mt};
`;