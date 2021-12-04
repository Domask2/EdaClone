import React from "react";

import styled, { keyframes } from "styled-components";

interface StyledOverlayProps {
  search: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 0;
  }
`;

const fadeOut = keyframes`
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

  animation: ${props => props.search ? fadeOut : fadeIn} 1s linear;
  transition: opacity 1s ease;

  @media (max-width: 1000px) {
    top: ${(props) => (props.search ? "100px" : "0")};
  }
`;

interface OverlayProps {
  search?: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ search }) => {
  return <StyledOverlay search />;
};
