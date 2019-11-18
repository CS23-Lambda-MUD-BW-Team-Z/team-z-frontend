import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { props } from 'bluebird'


function Game( {setUser, user, history} ) {

    
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
            console.log(res)
        })

    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.title}</h3>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Game