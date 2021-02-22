import React from 'react';

//Objetos
import icons from '../objects/icons';

const NavigationMain = (props) =>{

    const { profile, music, wallpaper, message, mail, tools, image, menu } = icons;
    return(
        <div style={StyleNavMain}>
            <img style={StyleImg} src={profile} onClick={props.profile}/>
            <img style={StyleImg} src={music}/>
            <img style={StyleImg} src={wallpaper}/>
            <img style={StyleImg} src={message}/>
            <img style={StyleImg} src={mail}/>
            <img style={StyleImg} src={tools}/>
            <img style={StyleImg} src={image}/>
            <img style={StyleMenu} src={menu}/>
        </div>
    )
};

const StyleNavMain = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(30, 39, 32, 0.45)',
    width: '60px',
    height: window.innerHeight - 20}

const StyleImg = {
    widht: '40px',
    height: '40px',
    margin: '13px 0px',
    cursor: 'pointer',
    opacity: 1}

const StyleMenu = {
    widht: '40px',
    height: '40px',
    marginTop: 'auto',
    marginBottom: '10px'
}

export default NavigationMain;