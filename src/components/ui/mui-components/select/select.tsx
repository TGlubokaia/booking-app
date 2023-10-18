import { suitCategories } from '@/core/utils/utils';
import Select, { SelectProps } from '@mui/material/Select';
import CustomSelectInputBase from './select-input-base';
import MenuItem from '@mui/material/MenuItem';

// eslint-disable-next-line react/display-name
function CustomSelect(props: SelectProps) {
  return (
    <Select
      inputProps={{ 'aria-label': 'controlled' }}
      variant="outlined"
      input={<CustomSelectInputBase />}
      {...props}
    >
      {Object.keys(suitCategories).map((category) => (
        <MenuItem key={category} value={category}>
          {suitCategories[category]}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CustomSelect;
