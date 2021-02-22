import React, { useState, useEffect } from 'react';
import Header from './header';


const Windows = (props) =>{

    let [minMax, setMinMax] = useState(false);

    const changeSize = (props) =>{
        setMinMax(!minMax)
    }

    return(
        <div id="windowsDrop" style={minMax ? StyleWindowsMax : StyleWindowsMin}>
            <Header changeSize = {changeSize} name = {props.name} close = {props.close}/>
            {props.children}
        </div>

)};

const StyleWindowsMin = {
    position: 'absolute',
    backgroundColor: 'rgba(30, 39, 32, 0.45)',
    height: '400px',
    width: '600px',
    top: '200px',
    left: '300px'
}

const StyleWindowsMax = {
    position: 'absolute',
    backgroundColor: 'rgba(30, 39, 32, 0.45)',
    height: '600px',
    width: '900px',
    top: '40px',
    left: '300px',
    borderRadius: '5px'
}

export default Windows;