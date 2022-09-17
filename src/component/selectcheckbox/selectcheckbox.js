
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Autocomplete, TextField, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FontSize from '../constants/fontSize';
import Appcolors from '../constants/colors';

const icon = <RadioButtonUncheckedIcon fontSize="small" />;
const checkedIcon = <CheckCircleIcon fontSize="small" />;

export const MySelectCheckBox = React.forwardRef(({
  label,
  width,
  onChange,
  options,
  height,
  placeholder,
  required,
  helperText,
  name,
  ...rest
}, ref) => {
  return (
    <div style={{ width: width, paddingBottom: FontSize.DivLabelMarginBottom}}>
       {required ?
        <Typography sx={{ marginBottom: FontSize.LabelMarginBottom ,fontSize: FontSize.textFieldLabel}} variant="body2" color={helperText ? "#f44335" : "#000000b3"}>{label}<span style={{ color: "red" }}> *</span></Typography>
        :
        <Typography sx={{ marginBottom: FontSize.LabelMarginBottom,fontSize: FontSize.textFieldLabel }} variant="body2" color={helperText ? "#f44335" : "#000000b3"}>{label}</Typography>
      }
      
        <Autocomplete
          size="small"
          multiple
          aria-required
          sx={{
            "&.Mui-focused .MuiInputLabel-formControl": { top: -4, left: 5, marginRight: 0, paddingRight: 0 },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { paddingRight: '12px', paddingLeft: '8px', fontSize: '15px', borderWidth: "1px !important" },
            "&.css-1txtcdy-MuiAutocomplete-root .MuiOutlinedInput-root": {padding: '0px'},
            "& .MuiInputBase-input": { color: "#0c6cba", height: "20px", fontSize: FontSize.textField, "&::placeholder": { opacity: 0.5, color: "#3a4c6b" } },
            ".MuiInputLabel-formControl": { top: -6, fontSize: '14px'},
            "&:hover": { "& .MuiOutlinedInput-notchedOutline": { borderColor: "#a0a0a0 !important" } },
            "&  .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{
              padding:"6px"
            },
            "& .MuiOutlinedInput-notchedOutline ":{
              borderColor:"#cbd5e0 !important"
            },
            ".css-afbfrq-MuiButtonBase-root-MuiChip-root.Mui-disabled":{
              color:Appcolors.textFiledDisabled,
              opacity: 1
            }
          }}
          id="checkboxes-tags-demo"
          options={options}
          disableCloseOnSelect
          onChange={(option, value, reason, detail) => { onChange(option, value, reason, detail) }}
          getOptionLabel={(option) => option[name]}
          renderOption={(props, option, { selected }) => (
            <li style={{ padding: 0, fontSize: 14 }} {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 0 }}
                checked={selected}
              />
              {option[name]}
            </li>
          )}
          style={{ width: width }}
          renderInput={(params) => (
            <TextField {...params}
            placeholder={placeholder} />
          )}
          {...rest}
        />
    </div>
  );
});