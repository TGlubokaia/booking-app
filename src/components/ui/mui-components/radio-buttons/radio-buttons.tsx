import { suitCategories } from '@/core/utils/utils';
import CustomRadio from './radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';

// eslint-disable-next-line react/display-name
const CustomRadioButtons = (props: RadioGroupProps) => {
  return (
    <RadioGroup {...props}>
      {Object.keys(suitCategories).map((category) => (
        <FormControlLabel
          key={category}
          value={category}
          control={<CustomRadio />}
          label={suitCategories[category]}
        />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioButtons;
