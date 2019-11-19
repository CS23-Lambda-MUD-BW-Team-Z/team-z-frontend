import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Game from './components/game/Game'
import axios from 'axios';
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";

const App = () => {

  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(user)
    setToken(token)
  }, [user, token])

  

  const login = user => {
    //console.log(user)
    axios.post('https://lambda-mud-test.herokuapp.com/api/login/', { ...user })
      .then(res => {
        console.log(res.data.key)
        setToken(res.data.key)
        localStorage.setItem('token', res.data.key)
        loginKey(localStorage.getItem('token'))

      })
  }

  const loginKey = async (tok) => {
    axios.defaults.headers.common['Authorization'] = `Token ${tok}`
    // window.localStorage.setItem('token',tok)
    setToken(tok)
  }

  const register = user => {
    axios.post('https://lambda-mud-test.herokuapp.com/api/login/', { ...user })
      .then(res => {
        console.log(res)
      })
  }


  return (
    <Router>
      <div className="App">

        <>
          {/* Route paths for each components */
            console.log(token)
          }
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" render={(props) => <Login {...props} loginKey={loginKey} />} />
          <Route exact path="/register" render={(props) => <Register {...props} user={user} setUser={setUser} />} />


          <Route
            path='/game'
            render={(props) => <Game {...props} user={user} setUser={setUser} loginKey={loginKey} />}
          />

        </>
      </div>
    </Router>
  )
}

export default App;