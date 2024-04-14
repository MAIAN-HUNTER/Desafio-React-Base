import React from 'react'

const WorkOut ='Latissimo dorsal'
 
const color = "blue"

const Paint =() => { 
     return (
        <div 
            className= 'paint'>
            <h3>Thursday Workout...</h3>
            <p style={{color: color}}>{WorkOut.toUpperCase()}</p> 
        </div>
        )
    }

export default Paint