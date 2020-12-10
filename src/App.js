import React, { useState, useEffect } from 'react'

import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import './App.css';
import Message from './Message';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{username: 'Dee', text: 'Hello People'},
    { username: 'John', text: 'Hello Dee'},
    { username: 'Ramsey', text: 'Your are here'}])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    setUserName(prompt('Please enter your name'))    
  }, [])


  const sendMessage = (event) => {
    event.preventDefault()

    setMessages([...messages, {username: userName, text: input}])
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

      {
        messages.map(msg => (
          <Message 
          userName={msg.username}
          message={msg.text}/>
        ))
      }

    </div>
  );
}

export default App;
