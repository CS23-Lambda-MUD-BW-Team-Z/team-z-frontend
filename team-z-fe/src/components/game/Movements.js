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

    
    const [loading, setLoading] = useState(false)
    const move = (e) => {
        setLoading(true)
        axios.post('https://lambda-mud-test.herokuapp.com/api/adv/move', {direction: e})
        .then( res => {
            console.log(res)
            setUser({...res.data})
            setLoading(false)
        })
    }

    


    const logout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <section className="movements">
            <section className="arrow-row">
              {console.log(loading)}
                {localStorage.getItem('north') === 'true' ?
                //if going north is true display active arrow, if false display disabled arrow
                //***  repeat for all arrows/
                <FontAwesomeIcon className="arrow" onClick={()=> {
                    if (loading === false && localStorage.getItem('north') === 'true') {
                        move('n') 
                    } 
                   
                }} icon={faArrowAltCircleUp} /> : <FontAwesomeIcon className='disabled' icon={faArrowAltCircleUp} /> }

            </section>
            <section className="arrow-row__center">
                {localStorage.getItem('west') === 'true' ?
                <FontAwesomeIcon className="arrow"  onClick={()=> {
                    if (loading === false && localStorage.getItem('west') === 'true') {
                        move('w') 
                    }
                   
                }} icon={faArrowAltCircleLeft} />  : <FontAwesomeIcon className='disabled' icon={faArrowAltCircleLeft} />  }
                {localStorage.getItem('east') === 'true' ? 
                <FontAwesomeIcon className="arrow"  onClick={()=> {
                    if (loading === false && localStorage.getItem('east') === 'true') {
                        move('e') 
                    }
                   
                }} icon={faArrowAltCircleRight} /> : <FontAwesomeIcon className='disabled' icon={faArrowAltCircleRight} /> }
            </section>
            <section className="arrow-row">
            {localStorage.getItem('south') === 'true' ?
            <FontAwesomeIcon className="arrow"  onClick={()=> {
                if (loading === false && localStorage.getItem('south') === 'true') {
                    move('s') 
                } 
               
            }} icon={faArrowAltCircleDown} /> : <FontAwesomeIcon className='disabled' icon={faArrowAltCircleDown} /> }
            </section>
        </section>
    )
}

export default Movements