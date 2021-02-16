import React, { useState } from 'react';
import './inputRange.css';

const InputRange = () => {
    const [range, setRange] = useState("4")

    return (
        <div>
            <input
                type="range"
                min="0"
                max="6"
                value={range}
                className="custom-range"
                onChange={(e) => setRange(e.target.value)}
                list="pageViews" />

            <datalist id="pageViews">
                <option value="0"></option>
                <option value="10"></option>
                <option value="50"></option>
                <option value="100"></option>
                <option value="500"></option>
                <option value="1000"></option>
            </datalist>
        </div>
    )
}

export default InputRange