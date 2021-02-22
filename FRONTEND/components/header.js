import React, { useEffect } from 'react';


const Header = (props) =>{

    useEffect(() => {
        document.getElementById('windowsDrop')
            addEventListener('mousedown', mousedown)
    
    
        function mousedown(e){
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);
    
            let prevX = e.clientX;
            let prevY = e.clientY;
    
            function mousemove(e){
                let newX = prevX - e.clientX;
                let newY = prevY - e.clientY;
    
                const rect = document.getElementById('windowsDrop').getBoundingClientRect();
                document.getElementById('windowsDrop').style.left = rect.left - newX + 'px';
                document.getElementById('windowsDrop').style.top = rect.top - newY + 'px';
    
                prevY = e.clientY;
                prevX = e.clientX;
            }
    
            function mouseup(e){
                window.removeEventListener('mousemove', mousemove);
                window.removeEventListener('mouseup', mouseup);
            }
        }  
    }, [])

    return(
        <div style={StyleHeader}>
            <div style={StyleBackNext}>
                BACK - NEXT
            </div>
            <div style={StyleTitle}>
                {props.name}
            </div>
            <div style={StyleMinMaxClose}>
                <div style={StyleMinMaxClose.ButtonMinMax}>_</div>
                <div onClick={props.changeSize} style={StyleMinMaxClose.ButtonMinMax}>□</div>
                <div onClick={props.close} style={StyleMinMaxClose.ButtonClose}>x</div>
            </div>
        </div>
    )
};

const StyleHeader = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 39, 32, 1)',
    width: '100%',
    height: '10%',
    color: 'white',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
}

const StyleMinMaxClose = {
    padding: '3px',
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    ButtonClose: {
        backgroundColor: 'orange',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        textAlign: 'center',
        margin: '0 10px 0 10px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    ButtonMinMax: {
        textAlign: 'center',
        margin: '0 10px 0 10px',
        cursor: 'pointer',
        fontSize: '15px',

    }
};

const StyleTitle = {
    padding: '3px',
    textAlign: 'center'
}

const StyleBackNext = {
    padding: '3px',
    width: '100px',
}


export default Header;