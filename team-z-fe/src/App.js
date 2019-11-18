import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.scss';
import Game from './components/game/Game'
import axios from 'axios';
const App = () => {

  const [token,setToken]=useState(null)
  const [user, setUser] = useState({})
  useEffect(() => {
    const user = {
      "username": 'billybobdjango',
      "password": 'IWnfnAlj@'
    }
    login(user)
  })
  
  const login = user => {
    axios.post('https://lambda-mud-test.herokuapp.com/api/login/', {...user})
    .then(res => {
      console.log(res.data.key)
      setToken(res.data.key)
      localStorage.setItem('token', res.data.key )
      loginKey(localStorage.getItem('token'))
    })
  }

  const loginKey=async(tok)=>{
    axios.defaults.headers.common['Authorization']=`Token ${tok}`
    // window.localStorage.setItem('token',tok)
    setToken(tok)
}

  const register = user => {
    axios.post('https://lambda-mud-test.herokuapp.com/api/login/', {...user})
    .then(res => {
      console.log(res)
    })
  }


  return (
    <Router>
      <div className="App">
      {
        localStorage.getItem('token') == token && <Game user={user} setUser={setUser} />
      }
      
            
      </div>
    </Router>
  )
}

export default App;