import React, { Component } from "react";
import { Container, InputMessage, SendButton } from "./styles";

export default class MessageInput extends Component {
  render() {
    return (
      <Container>
        <InputMessage></InputMessage>
        <SendButton>Send</SendButton>
      </Container>
    );
  }
}
