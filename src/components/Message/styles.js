import styled, { keyframes } from "styled-components";

const scaleUpRight = keyframes`
   0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }

`;

const scaleUpLeft = keyframes`
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }

`;

export const Container = styled.div`
  margin: 20px 5px;
  display: flex;

  ${props =>
    props.isMe ? "justify-content: flex-end;" : "justify-content: flex-start;"};
`;

export const MessageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  min-height: 30px;
  max-width: 60%;
  overflow: auto;
  word-break: break-word;
  white-space: pre-wrap;
  -moz-white-space: pre-wrap;
  -webkit-box-shadow: -5px 5px 15px -9px rgba(0, 0, 0, 0.51);
  box-shadow: -5px 5px 15px -9px rgba(0, 0, 0, 0.51);
`;

export const MessageLeft = styled(MessageText)`
  background-color: #fdfdfd;
  border-radius: 0px 10px 10px 10px;
  -webkit-animation: ${scaleUpLeft} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${scaleUpLeft} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const MessageRight = styled(MessageText)`
  background-color: #a5b1c2;
  border-radius: 10px 0 10px 10px;
  -webkit-animation: ${scaleUpRight} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: ${scaleUpRight} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
