import React, { Component } from "react";
import { Container, InputMessage, SendButton } from "./styles";

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  state = {
    user: "Sophie",
    message: ""
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  send = () => {
    const { message, user } = this.state;
    if (message) {
      const { sendMessage } = this.props;
      sendMessage({ text: message, author: user }, true);
      this.setState({ message: "" });
    }
  };

  handleKeyDown = event => {
    if (event.key === "Enter" || event.keyCode === 13) {
      this.send();
    }
  };
  render() {
    return (
      <Container>
        <InputMessage
          name="message"
          onChange={this.onChange}
          value={this.state.message}
          onKeyPress={this.handleKeyDown}
          placeholder={"Diga algo"}
        ></InputMessage>
        <SendButton onClick={this.send}>SEND</SendButton>
      </Container>
    );
  }
}
