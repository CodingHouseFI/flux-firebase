import { EventEmitter } from 'events'
import firebase from 'firebase'
import AppDispatcher from '../AppDispatcher'

let _messages = {};

class MessageStore extends EventEmitter {
  constructor() {
    super();

    this.ref = firebase.database().ref('messages');

    this.ref.on('value', snap => {
      _messages = snap.val();
      this.emit('CHANGE');
    });

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'CREATE_MESSAGE':
          this.ref.push(action.message);
          break;
        case 'REMOVE_MESSAGE':
          this.ref.child(action.id).remove();
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }
  
  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  get() {
    return _messages;
  }
}

export default new MessageStore();






// /// ref to messages

// this.ref.child('K-UFjei#*fnfjaoej').set('new data')

// this.ref.update({
//   'K-UFjei#*fnfjaoej': 'new data'
// })


















