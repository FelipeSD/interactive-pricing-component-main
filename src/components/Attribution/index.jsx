import './attribution.css';
import React from 'react';

const Attribution = (props) => {
    return (
        <div className="attribution">
            Challenge by {' '}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            
            Coded by {' '}
            <a href={props.link} target="_blank">
                {props.name}
            </a>.
        </div>
    )
}

export default Attribution;