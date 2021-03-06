import React, { Component } from 'react';
import ChatActions from '../../actions/ChatActions'

export default class ChatForm extends Component {
  constructor() {
    super();

    this.state = {
      messageText: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onInputChange(e) {
    let messageText = e.target.value;
    this.setState({ messageText });
  }

  _onSubmit(e) {
    e.preventDefault();
    let { messageText } = this.state;

    this.setState({
      messageText: ''
    });

    ChatActions.createMessage(messageText);
  }

  render() {
    let { messageText } = this.state;

    return (
      <form onSubmit={this._onSubmit}>
        <input type="text" value={messageText} onChange={this._onInputChange} required />
        <button>Send</button>
      </form>
    )
  }
}
