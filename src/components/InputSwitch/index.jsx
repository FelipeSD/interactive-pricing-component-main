import React, {useState} from 'react';
import './inputSwitch.css';

const InputSwitch = (props) => {
    return (
        <div className="custom-switch">
            <input
                type="checkbox"
                className="custom-control-input checked"
                id={props.id}
                value={props.value}
                defaultChecked={props.value}
                onChange={(e) => props.onChange(e)}/>
            <label className="custom-control-label" htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default InputSwitch