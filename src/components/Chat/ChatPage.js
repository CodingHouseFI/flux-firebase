import React, { Component } from 'react';

import MessageStore from '../../stores/MessageStore'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

export default class ChatPage extends Component {
  constructor() {
    super();

    this.state = {
      messages: MessageStore.get()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    MessageStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    MessageStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      messages: MessageStore.get()
    });
  }

  render() {
    let { messages } = this.state;

    return (
      <div>
        <h1 className="text-center">Chat!</h1>
        <ChatForm />
        <ChatList messages={messages} />
      </div>
    )
  }
}
