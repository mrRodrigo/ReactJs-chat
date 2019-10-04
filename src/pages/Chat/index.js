import React, { Component, createRef } from "react";

import { Container, MessagesContainer } from "./styles";

import MessageInput from "../../components/MessageInput";
import Message from "../../components/Message";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.messagesEndRef = React.createRef();
  }
  state = {
    user: "Sophie",
    messages: [{ text: "Hi", author: "Mary" }]
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  renderMessage(msg, i) {
    const { user } = this.state;
    return (
      <Message key={i} messageText={msg.text} isMe={msg.author === user} />
    );
  }

  sendMessage(msg) {
    this.setState({
      messages: [...this.state.messages, msg]
    });
    setTimeout(() => {
      this.setState({
        messages: [
          ...this.state.messages,
          { text: "Lorem ipsum", author: "Jonas" }
        ]
      });
    }, 300);
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <Container>
        <MessagesContainer>
          {this.state.messages.map((msg, i) => this.renderMessage(msg, i))}
          <div ref={this.messagesEndRef} />
        </MessagesContainer>
        <MessageInput sendMessage={this.sendMessage} />
      </Container>
    );
  }
}
