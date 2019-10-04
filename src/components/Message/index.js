import React, { Component } from "react";

import { Container, MessageLeft, MessageRight } from "./styles";

export default class Message extends Component {
  render() {
    const { isMe } = this.props;
    return (
      <Container isMe={isMe}>
        {isMe ? (
          <MessageRight>{this.props.messageText}</MessageRight>
        ) : (
          <MessageLeft>{this.props.messageText}</MessageLeft>
        )}
      </Container>
    );
  }
}
