import React, {useState} from 'react';
import './inputSwitch.css';

const InputSwitch = (props) => {
    const [check, setCheck] = useState(false);

    return (
        <div className="custom-switch">
            <input
                type="checkbox"
                class="custom-control-input checked"
                id={props.id}
                value={check}
                defaultChecked={check}
                onChange={() => setCheck(!check)}/>
            <label className="custom-control-label" htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default InputSwitch