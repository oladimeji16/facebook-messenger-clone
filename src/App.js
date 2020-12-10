import React, { useState } from 'react'
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    setMessages([...messages, input])
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello Guys</h1>
      
      <input type="text" 
      value={input}
      onChange={e => setInput(e.target.value)}
      //npm install -g firebase-tools firebase login firebase init firebase deploy
       />
      <button onClick={sendMessage}>Search</button>

    </div>
  );
}

export default App;
