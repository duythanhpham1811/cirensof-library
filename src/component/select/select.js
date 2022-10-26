import { Autocomplete, createFilterOptions, FormControl, InputAdornment, InputLabel, ListItemIcon, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FontSize from '../constants/fontSize';
import Appcolors from '../constants/colors';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import styled from 'styled-components';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));


export const MySelect = React.forwardRef(({
  width,
  required,
  helperText,
  onChange,
  value,
  label,
  name,
  tooltip = false,
  tooltipContent,
  options,
  placeholder,
  errors,
  height,
  disabled,
  offPaddingBottom,
  disableClearable = false,
  defaultValue,
  ...rest
}, ref) => {


  return (
    <div style={{ width: width, paddingBottom: offPaddingBottom ? "0px !important" : FontSize.DivLabelMarginBottom }}>
      {required ?
        <Typography sx={{ marginBottom: label ? FontSize.LabelMarginBottom : "0px !important", fontSize: FontSize.textFieldLabel }} variant="body2" color={errors ? "#f44335" : "#000000b3"}>{label}<span style={{ color: "red" }}> *</span></Typography>
        :
        <Typography sx={{ marginBottom: label ? FontSize.LabelMarginBottom : "0px !important", fontSize: FontSize.textFieldLabel }} variant="body2" color={errors ? "#f44335" : "#000000b3"}>{label}</Typography>
      }
      <Autocomplete
        value={value}
        fullWidth
        options={options}
        disableClearable={disableClearable}
        defaultValue={defaultValue ? defaultValue : undefined}
        onChange={onChange}
        popupIcon={<KeyboardArrowDownIcon style={{ color: "#8080808a", fontSize: "20px" }} />}
        getOptionLabel={(option) => {
          return option[name]
        }}
        renderOption={(props, option, { selected }) => {
          return (
            <>
              {tooltip ?
                <HtmlTooltip placement="left" title={
                  <div {...props}>
                    {tooltipContent && tooltipContent.map((e) => (
                      <div>
                        {option[e.content] !== null ? <Typography color={"#344767e3"} sx={{ fontSize: "14px" }}><b>{e.title}</b> : {option[e.content]}</Typography> : ""}
                      </div>
                    ))}
                  </div>
                }>
                  <li {...props}>
                    <Typography color={"#344767e3"} sx={{ fontSize: "14px" }}>
                      {option[name]}
                    </Typography>
                  </li>
                </HtmlTooltip>
                :
                <li {...props}>
                  <Typography color={"#344767e3"} sx={{ fontSize: "14px" }}>
                    {option[name]}
                  </Typography>
                </li>
              }

            </>

          );
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            padding: "4.5px",
            paddingLeft: "15px",
            color: Appcolors.textFiled,
            fontSize: FontSize.textField,
            textOverflow: 'ellipsis',
            height: height ? height : "33px",
            "& .MuiAutocomplete-input": {
              height: "100%",
              padding: "0px",
              textOverflow: 'ellipsis',
            }
          }
        }}
        disabled={disabled}
        renderInput={(params) => (
          <TextField {...params}
            helperText={errors && helperText}
            placeholder={placeholder}
            sx={{
              ".MuiFormHelperText-root": {
                color: '#f44335 !important',
                marginTop: "5px !important",
                paddingLeft: "5px !important",
                fontSize: "13px",
              },
              backgroundColor: disabled ? Appcolors.backgroundDisabled : "white",
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: errors ? "#e91e63 !important" : "#cbd5e0 !important"
                },
                '&:hover fieldset': {
                  borderColor: "#a0a0a0 !important"
                },
                '&.Mui-focused fieldset': {
                  border: errors ? "1px solid #e91e63 !important" : "1px solid #1a73e8 !important"
                },
              },
              ".MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": Appcolors.textFiledDisabled
              }
            }}
            variant="outlined" />
        )}
        {...rest}
      />
    </div>
  );
});

