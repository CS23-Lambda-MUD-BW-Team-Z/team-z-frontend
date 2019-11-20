import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { props } from 'bluebird'
import Movements from './Movements'
import '../../styles/maps.scss'
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';


function Map( {setUser, user, history, rooms} ) {
  
    
    return (
        <div className="map-container">
        
        {
            
            rooms.map(room => 
            <div className={`${room.title} room-container`} 
            style={{borderLeft: rooms[0] && 
            room.w_to === 0 ? "2px solid red" : "none",
            borderRight: rooms[0] && 
            room.e_to === 0 ? "2px solid red" : "none",
            borderBottom: rooms[0] && 
            room.s_to === 0 ? "2px solid red" : "none",
            borderTop: rooms[0] && 
            room.n_to === 0 ? "2px solid red" : "none",}}>
                
            </div>
            )
                
                

        }
        <XYPlot height={300} width={300}>
        
            <LineSeries data={rooms} />
         </XYPlot>
            
        </div>
    )
}

export default Map