import React, { Component } from 'react';
import ChatPage from './Chat/ChatPage'

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Welcome to React!</h1>
        <ChatPage/>
      </div>
    )
  }
}
