import React from 'react'
import {InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FontSize from '../constants/fontSize';

export const Search = React.forwardRef(({
  width,
  required,
  helperText,
  label,
  height,
  ...rest
}, ref) => {
  return (
    <div style={{ width: width }}>
      <TextField
        {...rest}
        helperText={helperText}
        variant="outlined"
        type="search"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                       <SearchIcon sx={{fontSize:"20px"}}/>
            </InputAdornment>
          ),
          sx: {
            height: height ? height : "26px",
            color: "#3a4c6b",
            fontSize: FontSize.textField,
            "& .MuiOutlinedInput-input": {
              padding: "12px 0px 12px 15px!important"
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
              borderColor: helperText ? "#e91e63 !important" : "#cbd5e0 !important"
            },
            '&:hover fieldset': {
              borderColor: "#a0a0a0 !important"
            },
            '&.Mui-focused fieldset': {
              border: helperText ? "1px solid #e91e63 !important" : "1px solid #1a73e8 !important"
            },
          },
        }}
      />
    </div>
  );
});

