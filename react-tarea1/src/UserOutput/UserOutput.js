import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
        <div className="UserOutput">
            <p>username: {props.username}</p>
            <p>description: I'm really friendly</p>
        </div>
    )
};
export default userOutput;