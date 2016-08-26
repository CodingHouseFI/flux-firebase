import AppDispatcher from '../AppDispatcher'

const ChatActions = {
  createMessage(message) {
    AppDispatcher.dispatch({
      type: 'CREATE_MESSAGE',
      message
    });
  },

  removeMessage(id) {
    AppDispatcher.dispatch({
      type: 'REMOVE_MESSAGE',
      id
    })
  }
};

export default ChatActions;
