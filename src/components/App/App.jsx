import Main from '../Main/Main'
import Menu from "../Menu/Menu";
import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import message from '../../message.json'
import floodMessage from '../../messageFlood.json'
import WelcomePage from "../WelcomePage/WelcomePage";

function App () {
  const [messages, setMessages] = useState([])
  const [floodMessages, setFloodMessages] = useState([])
  const [messageText, setMessageText] = useState('')
  const messageContainer = useRef()
  console.log(messageContainer)

  const updateMessageText = (e) => {
    setMessageText(e.target.value);
    console.log(messageText)
  };

  useEffect(() => {
    setMessages(message)
    setFloodMessages(floodMessage)
    messageContainer.current.scrollTop = messageContainer.current.scrollHeight
    console.log('here', messages)
  }, [messages, floodMessages, messageContainer])

  const onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      messageText,
      avatar: {
        url: 'klk'
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
      avatar: {
        url: 'klk'
      },
      name: 'Jin'
    }

    setFloodMessages(floodMessages.push(newMessage))
    setMessageText('');
  };

  return (
    <BrowserRouter>
      <div className='container'>

        <Switch>
          <Route exact path='/'>
            <Menu/>
            <WelcomePage/>
          </Route>
          <Route path='/work'>
            <Menu
              page='work'
            />
            <Main
              messages={messages}
              page='work'
              onSubmit={onSubmit}
              updateMessageText={updateMessageText}
              messageText={messageText}
              messageContainer={messageContainer}
            />
          </Route>
          <Route path='/flood'>
            <Menu
              page='flood'
            />
            <Main
              messages={floodMessages}
              page='flood'
              onSubmit={onSubmitFlood}
              updateMessageText={updateMessageText}
              messageText={messageText}
              messageContainer={messageContainer}
            />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  )
}

export default App