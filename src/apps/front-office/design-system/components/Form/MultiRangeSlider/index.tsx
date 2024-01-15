import { useFormControl } from '@mongez/react-form';
import { StyledRangeSlider } from '../styles';

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
          { value: props.min, label: props.min },
          { value: props.max, label: props.max },
        ]}
      />
    </div>
  );
};

export default MultiRangeSlider;
