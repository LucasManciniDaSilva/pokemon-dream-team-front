import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #6d9fff, #0057ff);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #fff;
      }
    }
    span{

      margin: 5px 0 0;
      height: 44px;
      color: #fb6f91;
      align-self: flex-start;
      font-weight: bold;

    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background:  #fa7474;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#fa7474')};
      }
    }

    a {
      margin: 5px 0 0;
      height: 20px;
      font-weight: bold;
      background:  #a98ffe;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;


    &:hover {
      background: ${darken(0.1, '#a98ffe')};
    }
  }
`;
