import * as Range from '@radix-ui/react-slider';
import style from './slider.module.css';

const Slider = (props) => {
    return (
        <Range.Root
            className={style.root}
            max={props.max}
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
