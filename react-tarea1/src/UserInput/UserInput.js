import React from 'react';
const userInput = (props) =>{
    const inputStyle={
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor:'pointer'
    };
    return (
        <div>
            <input 
                type="text" 
                style={inputStyle}
                onChange={props.change} 
                value={props.cname}/>
        </div>
    )
};
export default userInput;