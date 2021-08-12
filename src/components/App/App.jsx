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
  const [messages, setMessages] = useState(message)
  const [floodMessages, setFloodMessages] = useState(floodMessage)
  const [messageText, setMessageText] = useState('')
  const [sendMessageText, setSendMessageText] = useState(messageText)
  const arrayOfMessages = messages
  const arrayOfFloodMessages = floodMessages
  // const [user, setUser] = useState({
  //   id: 3,
  //   name: 'Джин Казуми',
  //   avatar: jinAvatar
  // })

  function deleteMessage(id) {
    const newArrayOfMessages = messages.filter((item) => {
      return item.id !== id
    })
    setMessages(newArrayOfMessages)
  }

  function deleteFloodMessage(id) {
    const newArrayOfMessages = floodMessages.filter((item) => {
      return item.id !== id
    })
    setFloodMessages(newArrayOfMessages)
  }

  const updateMessageText = (e) => {
    setMessageText(e.target.value);
    console.log(messageText)
  };

  const changeMessageText = (e) => {
    setSendMessageText(e.target.value);
    console.log('target', e.target.value)
  }

  // useEffect(() => {
  //
  //   console.log('here', message)
  // }, [messages, floodMessages])

  const onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      messageText,
      id: randomNumber(),
      avatar: {
        url: jinAvatar
      },
      name: 'Джин',
      user: 3
    }
    arrayOfMessages.push(newMessage)
    setMessages(arrayOfMessages)
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
      name: 'Джин',
      user: 3
    }
    arrayOfFloodMessages.push(newMessage)
    setFloodMessages(arrayOfFloodMessages)
    setMessageText('');
    console.log('HERE', randomNumber(), floodMessages)
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

        <Switch >
          <Route exact path='/'>
            <Menu/>
            <WelcomePage/>
          </Route>
          <Route path='/work'>
            <Menu/>
            <Main
              messages={messages}
              onSubmit={onSubmit}
              updateMessageText={updateMessageText}
              messageText={messageText}
              sendMessageText={sendMessageText}
              deleteMessage={deleteMessage}
              changeMessageText={changeMessageText}
            />
          </Route>
          <Route path='/flood'>
            <Menu/>
            <Main
              messages={floodMessages}
              onSubmit={onSubmitFlood}
              updateMessageText={updateMessageText}
              messageText={messageText}
              deleteMessage={deleteFloodMessage}
            />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  )
}

export default App