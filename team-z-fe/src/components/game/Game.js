import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import Movements from './Movements'

function Game( {setUser, user, history,loginKey} ) {
    const [rooms,setRooms] = useState([])
    // const [user, setName] = useState(null)

    useEffect(()=>{
        if (localStorage.getItem('token')!=null) {
            loginKey(localStorage.getItem('token'))
        //   setUser(user)
        console.log('true')
          
        }
      },[])


    useEffect(()=> {
        axios.get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
        .then( res => {
            console.log(res)
            setUser({...res.data})
        })

    }, [axios,setUser])

    useEffect(()=> {
        axios.get('https://lambda-mud-test.herokuapp.com/api/adv/rooms/')
        .then( res => {
           
            
            setRooms(JSON.parse(res.data.rooms))
        })

    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    
    console.log(rooms)
    let current = rooms.filter(room => room.fields.title === user.title && room.fields.description === user.description)

    current = current[0]
    console.log(current)

    if (current && current.fields.n_to === 0) { //if current room's 'n_to' points to 0, it is unavailable
           // using local storage as using a state cause an infinite loop
            localStorage.setItem('north', 'false') // set storage of north to false
            
        /// repeat pattern below
        } else {
          
            localStorage.setItem('north', 'true')
        }
    
        if (current && current.fields.s_to === 0) {
            localStorage.setItem('south', 'false')
        } else {
            localStorage.setItem('south', 'true')
        }
    
        if (current && current.fields.e_to === 0) {
            localStorage.setItem('east', 'false')
        } else {
            localStorage.setItem('east', 'true')
        }
    
        if (current && current.fields.w_to === 0) {
            localStorage.setItem('west', 'false')
        } else {
            localStorage.setItem('west', 'true')
        }

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.title}</h3>
            <p>{user.description}</p>
            <Movements setUser={setUser}  />
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Game