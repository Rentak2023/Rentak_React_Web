import { useFormControl } from '@mongez/react-form';
import { StyledRangeSlider } from '../styles';
import { P4 } from '../../Typography';

const MultiRangeSlider = (props) => {
  const { value, changeValue, error, visibleElementRef, otherProps } =
  useFormControl(props);


  return (
    <div style={{width: "100%"}}>
      <StyledRangeSlider
        min={props.min}
        max={props.max}
        step={1000}
        onChange={changeValue}
        value={value}
        {...otherProps}
        marks={[
          { value: props.min, label: <P4>{Math.floor(props.min / 1000)}k EGP</P4> },
          { value: props.max, label: <P4>{Math.floor(props.max / 1000)}k EGP</P4>},
        ]}
      />
    </div>
  );
};

export default MultiRangeSlider;
