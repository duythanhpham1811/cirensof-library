import { FormControl, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import FontSize from '../constants/fontSize';
import Appcolors from '../constants/colors';

export const MyTextField = React.forwardRef(({
  width,
  required,
  helperText,
  label,
  height,
  disabled,
  errors,
  type,
  ...rest
}, ref) => {
  return (
    <div style={{ width: width ? width : "100%", paddingBottom: 8 }}>
      {required ?
        <Typography sx={{ marginBottom: FontSize.LabelMarginBottom, fontSize: FontSize.textFieldLabel }} variant="body2" color={helperText || errors? "#f44335" : "#000000b3"}>{label}<span style={{ color: "red" }}> *</span></Typography>
        :
        <Typography sx={{ marginBottom: FontSize.LabelMarginBottom, fontSize: FontSize.textFieldLabel, }} variant="body2" color={helperText  || errors ? "#f44335" : "#000000b3"}>{label}</Typography>
      }
      <TextField
        {...rest}
        helperText={helperText || errors}
        variant="outlined"
        type={type ? type : "search"}
        fullWidth
        disabled={disabled}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {helperText || errors ? <ReportOutlinedIcon style={{ fontSize: "16px", color: "#f44335" }} /> : <></>}
            </InputAdornment>
          ),
          sx: {
            backgroundColor: disabled ? Appcolors.backgroundDisabled : "white",
            height: height ? height : "33px !important",
            color: Appcolors.textFiled,
            fontSize: FontSize.textField,
            "& .MuiOutlinedInput-input": {
              paddingLeft: "15px!important",
              textOverflow: 'ellipsis',
            },
            "& .MuiOutlinedInput-input.Mui-disabled": {
              "-webkit-text-fill-color": Appcolors.textFiledDisabled
            },
          }
        }}
        sx={{
          ".MuiFormHelperText-root": {
            color: '#f44335 !important',
            marginTop: "5px !important",
            paddingLeft: "5px !important",
            fontSize: "13px",
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: helperText || errors ? "#e91e63 !important" : "#cbd5e0 !important"
            },
            '&:hover fieldset': {
              borderColor: "#a0a0a0 !important"
            },
            '&.Mui-focused fieldset': {
              border: helperText || errors ? "1px solid #e91e63 !important" : "1px solid #1a73e8 !important"
            },
          },
        }}
      />
    </div>
  );
});
