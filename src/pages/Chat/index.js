import React, { Component } from "react";

import { Container, MessagesContainer } from "./styles";

import MessageInput from "../../components/MessageInput";
import ScrollArea from "react-scrollbar";

export default class Chat extends Component {
  render() {
    return (
      <Container>
        <ScrollArea
          speed={0.8}
          className="messageArea"
          contentClassName="messagesContent"
          horizontal={false}
        >
          <MessagesContainer>a</MessagesContainer>
        </ScrollArea>
        <MessageInput />
      </Container>
    );
  }
}
