/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const cards = css`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const cardContent = css`
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  opacity: 0.8;
  margin: 20px;
  padding: 50px;
  padding-right: 20px;
  width: 350px;
  height: 50px;
  font-size: 25px;

  p {
    position: relative;
    top: -55px;
    left: -25px;
  }

  button {
    position: relative;
    left: 260px;
    top: -40px;
    bottom: 20px;
    background: black;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    height: 50px;
    width: 100px;

    &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      color: #ffffff;
    }
  }

  label {
    position: relative;
    font-size: 20px;
    opacity: 0.7;
    top: -30px;
    left: -130px;
  }
  input {
    position: relative;
    font-size: 20px;
    opacity: 0.7;
    top: -28px;
    left: -120px;
  }
`;
