import Main from '../Main/Main'
import Menu from "../Menu/Menu";
import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {useEffect, useState} from "react";
import message from '../../message.json'
import floodMessage from '../../messageFlood.json'
import WelcomePage from "../WelcomePage/WelcomePage";

function App () {
  const [messages, setMessages] = useState([])
  const [floodMessages, setFloodMessages] = useState([])

  useEffect(() => {
    setMessages(message)
    console.log('here', messages)
  })

  useEffect(() => {
    setFloodMessages(floodMessage)
    console.log('here', floodMessages)
  })

  return (
    <BrowserRouter>
      <div className='container'>
        <Menu/>
        <Switch>
          <Route exact path='/'>
            <WelcomePage/>
          </Route>
          <Route path='/work'>
            <Main
              messages={messages}
            />
          </Route>
          <Route path='/flood'>
            <Main
              messages={floodMessages}
            />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  )
}

export default App