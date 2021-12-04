import React from "react";
import Link from "next/link";
import { StyledSvg } from "../Svg";

import styled from "styled-components";

const StyledLinkLogo = styled.a`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

export const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <StyledLinkLogo>
          <StyledSvg width="63.43px" height="40px" viewBox="0 0 111 70">
            <path d="M103.857 43.693c-1.942 0-2.081-2.693-.139-8.78l5.964-18.927H98.17l-1.803 2.555h-.07c-.416-2.169-2.358-3.393-5.756-3.393-11.028 0-21.153 12.558-21.153 24.102v.7c-1.457 1.295-2.809 2.309-4.092 3.113.555-3.813 1.248-6.436 3.086-12.524.243-.839 4.543-14.587 4.543-14.587H61.482l-1.734 2.554h-.139c-.416-2.484-3.017-3.394-5.271-3.394-9.952 0-18.968 10.006-21.118 19.801-2.393 6.121-7.074 8.185-10.333 8.185-4.474 0-7.352-2.449-7.352-7.486 0-6.157 3.537-11.09 8.496-11.194 5.826 2.029 9.085.595 9.085-1.61 0-2.168-3.745-3.113-10.229-1.889-.347-1.154-.486-2.448-.486-3.777 0-7.102 3.086-13.714 8.704-13.714 1.526 0 2.358.35 3.156 1.155-6.693 6.541-2.809 11.963 1.733 11.963 3.086 0 5.965-2.028 5.965-6.401C41.959 4.688 36.619 0 27.915 0 16.992 0 9.571 6.018 9.571 13.853c0 4.058 2.67 7.171 5.617 8.431C7.143 23.508 0 28.231 0 37.082 0 45.127 5.167 49.64 14.668 49.64c8.947 0 14.981-3.498 18.101-9.445.313 6.577 3.884 9.096 9.294 9.096 4.75 0 9.154-2.169 11.166-8.642l.416.07-1.283 6.962c-.382.105-.728.21-1.11.35-17.269 5.353-23.164 9.445-23.164 15.077 0 4.129 3.606 6.892 9.709 6.892 13.941 0 22.991-7.172 26.875-23.474 1.63-.874 3.329-1.993 5.167-3.497 1.075 4.407 4.23 6.646 8.842 6.646 5.826 0 10.23-4.338 11.652-9.445l.52.07c-2.289 6.402.728 9.375 6.623 9.375 8.114 0 13.316-7.031 13.524-14.867h-2.393c-.243 5.422-2.808 8.885-4.75 8.885zM43.034 66.781c-2.358 0-3.329-1.293-3.329-3.777 0-3.253 2.15-8.361 11.443-12.035.208-.069.416-.139.624-.244-1.907 9.76-3.849 16.056-8.738 16.056zm14.182-44.777l-1.733 5.387c-3.537 10.95-5.341 15.743-7.178 15.743-.867 0-1.422-.666-1.422-4.373 0-7.417 4.473-20.046 8.357-20.046 1.526 0 2.115.875 1.976 3.289zm36.55 0l-1.734 5.387c-3.468 10.88-5.236 16.057-7.04 16.057-.936 0-1.421-.664-1.421-4.373 0-8.046 4.612-20.395 8.565-20.395 1.075.035 1.768.84 1.63 3.324z"></path>
          </StyledSvg>
      </StyledLinkLogo>
    </Link>
  );
};
