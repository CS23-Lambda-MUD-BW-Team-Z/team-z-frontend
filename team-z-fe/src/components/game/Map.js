import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import Movements from './Movements'
import '../../styles/maps.scss'
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';


function Map({ setUser, user, history, rooms,current }) {
    const [currentroom, setCurrent] = useState()
    const data = [
        { x: 1, y: 10 },
        { x: 2, y: 5 },
        { x: 3, y: 15 }
    ]

    useEffect(()=> {
        console.log(current)
        // setCurrent(current.id)
    },[setCurrent])


    return (
        <div className="map-container">
          
            {
                rooms.map(room => 
                    <div className={`room-${room.id} room-container`}
                        style={{
                            borderLeft: rooms[0] &&
                                room.w_to === 0 ? "2px solid #934b61" : "2px dotted #0049cc",
                            borderRight: rooms[0] &&
                                room.e_to === 0 ? "2px solid #934b61" : "2px dotted #0049cc",
                            borderBottom: rooms[0] &&
                                room.s_to === 0 ? "2px solid #934b61" : "2px dotted #0049cc",
                            borderTop: rooms[0] &&
                                room.n_to === 0 ? "2px solid #934b61" : "2px dotted #0049cc"
                        }}
                    >

                    {room.id && room.id === parseInt(localStorage.getItem('id')) ? (
                        <i id='av-horse' className="fas fa-horse"></i>
                    ) : (
                            <i id='av-circle' className="fas fa-circle"></i>
                        )}
                    </div>
                    
                    
                
                )



            }


        </div>
    )
}

export default Map