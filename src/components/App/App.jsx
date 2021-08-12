import Main from '../Main/Main'
import Menu from "../Menu/Menu";
import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {useEffect, useState, } from "react";
import message from '../../message.json'
import floodMessage from '../../messageFlood.json'
import WelcomePage from "../WelcomePage/WelcomePage";
import Login from "../Login/Login";
import Register from '../Register/Register'
import jinAvatar from '../../images/jin2.png'

function randomNumber() {
  return Math.floor(Math.random() * 1000000) + 22
}

function App () {
  const [messages, setMessages] = useState([])
  const [floodMessages, setFloodMessages] = useState([])
  const [messageText, setMessageText] = useState('')


  const updateMessageText = (e) => {
    setMessageText(e.target.value);
    console.log(messageText)
  };

  useEffect(() => {
    setMessages(message)
    setFloodMessages(floodMessage)
    console.log('here', messages)
  }, [messages, floodMessages])

  const onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      messageText,
      id: randomNumber(),
      avatar: {
        url: jinAvatar
      },
      name: 'Jin'
    }
    setMessages(messages.push(newMessage))
    setMessageText('');
  };

  const onSubmitFlood = (e) => {
    e.preventDefault();
    const newMessage = {
      messageText,
      id: randomNumber(),
      avatar: {
        url: jinAvatar
      },
      name: 'Jin'
    }

    setFloodMessages(floodMessages.push(newMessage))
    setMessageText('');
    console.log('jjjff', randomNumber())
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>
        </Switch>

        <Menu/>
        <Switch >
          <Route exact path='/'>
            <WelcomePage/>
          </Route>
          <Route path='/work'>
            <Main
              messages={messages}
              onSubmit={onSubmit}
              updateMessageText={updateMessageText}
              messageText={messageText}
            />
          </Route>
          <Route path='/flood'>
            <Main
              messages={floodMessages}
              onSubmit={onSubmitFlood}
              updateMessageText={updateMessageText}
              messageText={messageText}
            />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  )
}

export default App