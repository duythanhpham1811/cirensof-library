import { FormControl, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import FontSize from '../constants/fontSize';
import Appcolors from '../constants/colors';

export const MyTextFieldArea = React.forwardRef(({
  width,
  required,
  helperText,
  label,
  height,
  disabled,
  type,
  errors,
  ...rest
}, ref) => {
  return (
    <div style={{ width: width, paddingBottom: FontSize.DivLabelMarginBottom }}>
      {required ?
        <Typography sx={{  marginBottom: FontSize.LabelMarginBottom, fontSize: FontSize.textFieldLabel  }} variant="body2" color={errors ? "#f44335" : "#000000b3"}>{label}<span style={{ color: "red" }}> *</span></Typography>
        :
        <Typography sx={{  marginBottom: FontSize.LabelMarginBottom, fontSize: FontSize.textFieldLabel  }} variant="body2" color={errors ? "#f44335" : "#000000b3"}>{label}</Typography>
      }
      <TextField
        {...rest}
        helperText={errors && helperText}
        variant="outlined"
        multiline
        disabled={disabled}
        maxRows={4}
        type={type ? type : "search"}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {errors && <ReportOutlinedIcon style={{ fontSize: "16px", color: "#f44335" }} />}
            </InputAdornment>
          ),
          sx: {
            color: "#3a4c6b",
            fontSize: FontSize.textField,
            "& .MuiOutlinedInput-input": {
              textOverflow: 'ellipsis',
            },
          }
        }}
        sx={{
          backgroundColor: disabled ? Appcolors.backgroundDisabled : "white",
          ".MuiFormHelperText-root":{
            color: '#f44335 !important',
            marginTop: "5px !important",
            paddingLeft:"5px !important",
            fontSize:"13px",
          },
          '& .MuiOutlinedInput-root': {
            padding:"12px 15px 12px 15px!important" ,
            '& fieldset': {
              borderColor: errors ? "#e91e63 !important" : "#cbd5e0 !important"
            },
            '&:hover fieldset': {
              borderColor: "#a0a0a0 !important"
            },
            '&.Mui-focused fieldset': {
              border :"1px solid #1a73e8 !important"
            },
          },
          "& .MuiOutlinedInput-input.Mui-disabled": {
            "-webkit-text-fill-color": Appcolors.textFiledDisabled
          },
        }}
      />
    </div>
  );
});


