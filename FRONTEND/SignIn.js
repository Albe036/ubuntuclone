import React from 'react';
import Navegation from './components/navigation';
import user from './views/images/user7.svg';

const SignIn = () =>{
    return(
        <div style={StyleSignIn}>
            <Navegation color = '#1d0660'/>
            <div style={StyleContenedor}>
                <div style={StyleSignIn.userImg}>
                    <img style={StyleImg} src={user}/>
                    <h2>Bienvenido usuario</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

const StyleContenedor = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight - 35
}

const StyleSignIn = {
    backgroundColor: '#1d0660',
    height: window.innerHeight,
    width: window.innerWidth,
    userImg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 35px',
        backgroundColor: 'rgba(30, 39, 32, 0.3)',
        borderRadius: '10px'
    }
}

const StyleImg = {
    widht: '80px',
    height: '80px',
    margin: '0px 20px',
    //border: '3px solid white',
    padding: '10px',
    borderRadius: '10px'
}

export default SignIn;