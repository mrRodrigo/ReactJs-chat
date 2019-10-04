import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 90%;
  background-color: #ddd;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: #d1d8e0;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
