import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Game( {setUser, user} ) {

    
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

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.title}</h3>
        </div>
    )
}

export default Game