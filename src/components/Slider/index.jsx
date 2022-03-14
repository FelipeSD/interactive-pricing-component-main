import React from 'react';
import * as Range from '@radix-ui/react-slider';
import style from './slider.module.css';

const Slider = (props) => {
    return (
        <Range.Root
            className={style.root}
            max={props.max || 4}
            defaultValue={props.defaultValue || 2}
            onValueChange={(number) => props.onChange(number)}
        >
            <Range.Track className={style.track}>
                <Range.Range className={style.range} />
            </Range.Track>
            <Range.Thumb className={style.thumb} />
        </Range.Root>
    )
}

export default Slider
