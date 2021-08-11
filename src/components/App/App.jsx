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
            />
          </Route>
          <Route path='/flood'>
            <Menu
              page='flood'
            />
            <Main
              messages={floodMessages}
              page='flood'
            />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  )
}

export default App