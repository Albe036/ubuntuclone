import React from 'react';
import windowProfile from '../objects/windowProfile';

const Profile = () =>{

    const { me } = windowProfile;

    return(
        <div style={WinProfile}>
            <div style={WinProfile.left}>
                <div style={WinProfile.button}>Acerca de mi </div>
                <div style={WinProfile.button}>Estudios</div>
                <div style={WinProfile.button}>Experiencias</div>
                <div style={WinProfile.button}>Referencias</div>
                <div style={WinProfile.button}>Contactame</div>
                <div style={WinProfile.button}></div>
            </div>
            <div>RIGHT</div>
        </div>
    )
};

const WinProfile = {
    minHeight: '90%',
    display: 'grid',
    gridTemplateColumns: '0.5fr 2fr',
    left:{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 5fr'
    },
    button: {
        padding: '5px 10px',
        backgroundColor: 'rgba(30, 39, 32, 1)',
        color: 'white'
    },
    images: {
        widht: '20px',
        height:'20px'
    }
}



export default Profile;