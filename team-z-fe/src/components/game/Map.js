import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import Movements from './Movements'
import '../../styles/maps.scss'
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';


function Map( {setUser, user, history,rooms} ) {
 

    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];

 

  

    return (
        <div className="map-container">
        
        {
            rooms.map(room => 
            <div className={`${room.fields.title} room-container`} 
            style={{borderLeft: rooms[0] && 
            room.fields.w_to === 0 ? "2px solid red" : "none",
            borderRight: rooms[0] && 
            room.fields.e_to === 0 ? "2px solid red" : "none",
            borderBottom: rooms[0] && 
            room.fields.s_to === 0 ? "2px solid red" : "none",
            borderTop: rooms[0] && 
            room.fields.n_to === 0 ? "2px solid red" : "none",}}>
                
            </div>
                
                )

        }
        <XYPlot height={300} width={300}>
        <LineSeries data={data} />
         </XYPlot>
            
        </div>
    )
}

export default Map