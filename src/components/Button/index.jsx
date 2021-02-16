import React from 'react';
import './button.css';

export const LargeButton = (props) => {
    return (
        <button className="btn btn-round btn-large btn-primary">
            {props.text}
        </button>
    )
}