import React, { useState, useEffect } from 'react'

import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    setUserName(prompt('Please enter your name'))
  }, [])

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', "asc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Guys</h1>
      <h2>Welcome {userName}</h2>



      <form>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
          //npm install -g firebase-tools firebase login firebase init firebase deploy 
          />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message
              key={id}
              username={userName}
              message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
