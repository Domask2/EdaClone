import React from "react";

import { Logo } from "./Logo";
import { Input } from "../Input";
import { StyledSvg } from "../Svg";

import styled from "styled-components";

interface SearchFormProps {
  searchClose: () => void;
}

export const WrapperForm = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 951;
  border-left: 1px solid #b8b8b8;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  border-left: 1px solid #d9d9d9;
`;

export const SearchForm: React.FC<SearchFormProps> = ({ searchClose }) => {
  return (
    <WrapperForm>
      <Logo />
      <StyledForm>
        <StyledSvg
          viewBox="0 0 18 18"
          width="19px"
          height="19px"
          fill="#000"
          mr="0"
        >
          <path d="M18.002 17.324l-.678.678-4.022-4.022A7.96 7.96 0 0 1 8 16a8 8 0 1 1 8-8c0 2.037-.767 3.89-2.021 5.302l4.023 4.022zM15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
        </StyledSvg>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Поиск по рецептам, ингредиентам, статьям и в журнале «Еда»"
        />

        <StyledSvg
          onClick={searchClose}
          viewBox="0 0 16.18 16.18"
          width="24px"
          height="24px"
        >
          <path d="M16.194 15.486l-.708.708L8.09 8.797.694 16.194l-.708-.708L7.383 8.09-.014.694l.708-.707L8.09 7.383l7.396-7.396.708.707L8.797 8.09l7.397 7.396z" />
        </StyledSvg>
      </StyledForm>
    </WrapperForm>
  );
};
