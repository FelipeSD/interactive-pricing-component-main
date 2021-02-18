import React, { useState } from 'react';
import './inputRange.css';

const InputRange = (props) => {
    return (
        <div>
            <input
                type="range"
                min={props.min || 0}
                max={props.max || 100}
                value={props.value}
                className="custom-range"
                onChange={(e) => props.onChange(e)}
            />
        </div>
    )
}

export default InputRange