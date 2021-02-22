import React, { useState } from 'react';
//OBJETOS
import wallpapers from './views/images/wUbuntu.png';

//COMPONENTES
import Navegation from './components/navigation';
import NavegationMain from './components/navigationMain';
import Windows from './components/windows';
import Profile from './components/profile';

//VENTANAS



const App = () =>{
    const [ventana, setVentana] = useState(true);

    const profile = () =>{
        setVentana(!ventana);
    }

    return(<div style={styleContainer}>
        <Navegation color = '#1E1D20'/>
        {ventana && <Windows close = {profile} name = "Acerca de mi"><Profile/></Windows>}
        <NavegationMain profile = {profile}/>
    </div>)
};

const styleContainer = {
    margin: '0px',
    backgroundImage : `url(${wallpapers})`, 
    backgroundSize: 'cover'
}

export default App;

