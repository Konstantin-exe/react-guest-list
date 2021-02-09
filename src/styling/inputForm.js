/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const backgroundForm = css`
  background-color: white;
  display: block;
  position: center;
  margin: auto;
  margin-top: -275px;
  padding: 100px;
  width: 40%;
  border-radius: 20px;
  opacity: 0.5;
  backdrop-filter: blur(100rem);
  box-shadow: 0px 50px 50px 0;
`;
export const inputForm = css`
  position: relative;
  display: block;
  text-align: center;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding: 50px;
  padding-bottom: 100px;
  width: 70%;
  z-index: 10;
  h1 {
    font-size: 50px;
  }

  input {
    padding: 8px;
    margin: 5px;
    border-radius: 20px;
  }

  button {
    background: black;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    margin-left: 15px;
    position: relative;
    min-width: 100px;

    &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      color: #ffffff;
    }
  }
`;

export const filterStyle = css`
  position: relative;
  left: 50%;
  top: -25px;
  z-index: 10;
  span {
    margin-right: 10px;
  }
`;
