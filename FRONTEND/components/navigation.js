import React, { useState, useEffect } from 'react';

const Navegation = (props) => {

    const styles_nav = {
        backgroundColor : props.color,
        color: 'white',
        fontSize: '14px',
        textAlign: 'center',
        padding: '2px 0px'
    }

    const [time, setTime] = useState(new Date());

    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ];
    const mes = meses[time.getMonth()];
    const dia = time.toLocaleDateString([], {day:'2-digit'});
    const elemento = `${dia} ${mes} | ${time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`

    function timer(){
        setTime(new Date())
    };
    
    useEffect(()=>{
        setInterval(timer, 1000);
    });

    return(
        <nav style={styles_nav}>
            <span>{elemento}</span>
        </nav>
    )
};


export default Navegation;