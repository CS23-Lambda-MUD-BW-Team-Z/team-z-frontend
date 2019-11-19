import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import Movements from './Movements'

function Game( {setUser, user, history} ) {

    const [rooms,setRooms] = useState([])
    // const [name, setName] = useState(null)
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
            console.log(res.data)
            setRooms(res.data.rooms)
        })

    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

  
    //let current = rooms.filter(room => room.title === user.title && room.description === user.description)

    //console.log(current)
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