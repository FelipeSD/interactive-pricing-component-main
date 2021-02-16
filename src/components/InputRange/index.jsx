import React, { useState } from 'react';
import './inputRange.css';

const InputRange = (props) => {
    const [range, setRange] = useState("4")

    return (
        <div>
            <input
                type="range"
                min={props.min || 0}
                max={props.max || 100}
                value={range}
                className="custom-range"
                onChange={(e) => setRange(e.target.value)}
            />
        </div>
    )
}

export default InputRange