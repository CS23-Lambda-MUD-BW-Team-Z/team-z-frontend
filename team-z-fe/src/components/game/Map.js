import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import Movements from './Movements'
import '../../styles/maps.scss'
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';


function Map({ setUser, user, history, rooms }) {
    console.log('user data', user)
    console.log('user players data', user.players)
    console.log('room data', rooms)
    console.log('room players data', rooms.players)
    console.log('set user data', setUser)

    const data = [
        { x: 1, y: 10 },
        { x: 2, y: 5 },
        { x: 3, y: 15 }
    ]

    return (
        <div className="map-container">
            {user.players ? (
                <p style={{ color: "white" }}>hello</p>
            ) : null}
            {
                rooms.map(room =>
                    <div className={`room-${room.id} room-container`}
                        style={{
                            borderLeft: rooms[0] &&
                                room.w_to === 0 ? "2px solid red" : "none",
                            borderRight: rooms[0] &&
                                room.e_to === 0 ? "2px solid red" : "none",
                            borderBottom: rooms[0] &&
                                room.s_to === 0 ? "2px solid red" : "none",
                            borderTop: rooms[0] &&
                                room.n_to === 0 ? "2px solid red" : "none",
                        }}
                    >

                        {console.log(user.players)}
                        {/* {room.title === rooms.title ? (
                            <i id='av-horse' className="fas fa-horse"></i>
                            ) : (
                                <i id='av-circle' className="fas fa-circle"></i>
                            )} */}
                    </div>
                )
            }




        </div>
    )
}

export default Map