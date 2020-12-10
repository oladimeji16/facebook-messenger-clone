import React, { useState, useEffect } from 'react'

import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
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
      .orderBy('timestamp', "desc")
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
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h1>Hello Guys</h1>
      <h2>Welcome {userName}</h2>



      <form className='app__form'>
        <FormControl className='app__FormControl'>
          
          <Input
            className='app__Input'
            placeholder='Enter a message...'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
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
