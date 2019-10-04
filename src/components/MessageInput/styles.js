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
  height: 40px;
  border: 0px;
  border-radius: 10ex;
  padding: 10px;
  font-size: 1em;
  -webkit-box-shadow: 2px 2px 9px -2px rgba(0, 0, 0, 0.64);
  box-shadow: 2px 2px 9px -2px rgba(0, 0, 0, 0.64);
`;

export const SendButton = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 100%;
  border: 0px;
  background-color: #a55eea;
  color: #fff;

  &:active {
    top: 2px;
  }
`;
