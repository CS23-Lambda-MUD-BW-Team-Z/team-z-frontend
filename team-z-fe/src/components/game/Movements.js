import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons';
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons';
import '../../styles/movement.scss'
function Movements( {setUser, user, history} ) {

    
    // const [name, setName] = useState(null)
    const move = (e) => {
        axios.post('https://lambda-mud-test.herokuapp.com/api/adv/move', {direction: e})
        .then( res => {
            console.log(res)
            setUser({...res.data})
        })
    }

    


    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <section className="movements">
            <section className="arrow-row">
              
                <FontAwesomeIcon 
                className="arrow" 
                onClick={()=> { move('n')}} 
                icon={faArrowAltCircleUp} /> 
            </section>
            <section className="arrow-row__center">
            <FontAwesomeIcon 
            className="arrow" 
            onClick={()=> { move('w')}} 
            icon={faArrowAltCircleLeft} /> 

            <FontAwesomeIcon 
                className="arrow" 
                onClick={()=> { move('e')}} 
                icon={faArrowAltCircleRight} />   
            </section>
            <section className="arrow-row">

            <FontAwesomeIcon 
                className="arrow" 
                onClick={()=> { move('s')}} 
                icon={faArrowAltCircleDown} /> 
            </section>
        </section>
    )
}

export default Movements