import React from "react";

import styled, { keyframes } from "styled-components";
interface StyledOverlayProps {
  search: boolean;
}
interface OverlayProps {
  search?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
`;

export const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  z-index: 950;
  min-width: 100%;
  background: #000;
  overflow: hidden;

  height: ${(props) => (props.search ? "90vh" : "0")};
  opacity: ${(props) => (props.search ? "0.5" : "0")};
  top: ${(props) => (props.search ? "80px" : "0")};

  animation: ${(props) => props.search && fadeIn} 1s linear;

  @media (max-width: 941px) {
    top: ${(props) => (props.search ? "100px" : "0")};
  }
`;

export const Overlay: React.FC<OverlayProps> = ({ search }) => {
  return <StyledOverlay search />;
};
