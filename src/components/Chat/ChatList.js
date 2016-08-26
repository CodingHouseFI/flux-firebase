import React, { Component } from 'react';
import ChatActions from '../../actions/ChatActions'

export default class ChatList extends Component {
  constructor() {
    super();

    this._removeMessage = this._removeMessage.bind(this);
  }

  _removeMessage(key) {
    ChatActions.removeMessage(key);
  }

  render() {
    let { messages } = this.props;

    let Messages = [];

    for(let key in messages) {
      let Message = (
        <li key={key}>{ messages[key] }</li>
      )
      Messages.push(Message);
    }
    // for(let key in messages) {
    //   let Message = (
    //     <li key={key} onDoubleClick={this._removeMessage.bind(null, key)}>{ messages[key] }</li>
    //   )
    //   Messages.push(Message);
    // }

    return (
      <ul>
        {Messages}
      </ul>
    )
  }
}
