import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const InputMessage = styled.input`
  width: 70%;
  height: 50px;
  border: 0px;
  border-radius: 10ex;
  font-size: 1.5em;
`;

export const SendButton = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 100%;
  border: 0px;
  background-color: burlywood;
  color: #fff;

  &:active {
    top: 5px;
  }
`;
