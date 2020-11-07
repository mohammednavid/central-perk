import React, { useState } from 'react';

const Button = () => {
    const [Something,setSomething] = useState('Hi');
    const [modifyBut,setNewBut] = useState('DoSomething');
    const bgColor = 'gray';
    const [bg,setbg] = useState(bgColor) 
    const [btnBg,setBtnbg] = useState(bgColor) 
    const change = () => {
        setSomething('Bye',);
        setNewBut('Button is changed',);
        setbg('tomato')
        setBtnbg('yellow')
        
    }
    
    return(
        <>
        <h1 style={{ backgroundColor: bg }}>{Something}</h1>
    <button onClick={change} style={{ backgroundColor: btnBg }}>{modifyBut}</button>
        </>
        )};

export default Button;