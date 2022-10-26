
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import React, { useEffect } from 'react'
import { Typography } from '@mui/material';
import { vi } from 'date-fns/locale'
import FontSize from '../constants/fontSize';
import Appcolors from '../constants/colors';
import "./selecttime.scss"

export  const MySelectTime = (props) => {
  const [value, setValue] = React.useState(props.value ? new Date(props.value * 1000) : null);

  useEffect(() => {
    if (props.value) {
      setValue(new Date(props.value * 1000))
    }
  }, [props.value])

  const handleChange = (newValue) => {
    try {
      setValue(newValue);
      props.onChange(Math.floor(newValue.getTime() / 1000))
    }
    catch {

    }
  };

  return (
    <LocalizationProvider adapterLocale={vi} dateAdapter={AdapterDateFns}>
      {props.required ?
        <Typography sx={{ marginBottom: props.label ? FontSize.LabelMarginBottom : "0px !important",fontSize: FontSize.textFieldLabel }} variant="body2" color={props.errors ? "#f44335" : "#000000b3"}>{props.label}<span style={{ color: "red" }}> *</span></Typography>
        :
        <Typography sx={{ marginBottom: props.label ? FontSize.LabelMarginBottom : "0px !important",fontSize: FontSize.textFieldLabel }} variant="body2" color={props.errors ? "#f44335" : "#000000b3"}>{props.label}</Typography>
      }
      {
        props.views && props.views.length > 0 ?
          <DesktopDatePicker
            className="DesktopDatePicker"
            disabled={props.disabled}
            minTime={new Date()}
            views={props.views ? props.views : ['day', 'month', 'year']}
            maxDate={props.maxDate ? props.maxDate : new Date()}
            minDate={props.minDate ? props.minDate : new Date(1990, 1, 13)}
            value={value}
            inputFormat={props.inputFormat ? props.inputFormat : "dd/MM/yyyy"}
            openTo={props.openTo ? props.openTo : "day"}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                helperText={props.errors && props.helperText}
                {...params}
                onBlur={props.handleOnBlur}
                onSubmit={props.handleOnSubmit}
                fullWidth
                inputProps={{
                  ...params.inputProps,
                  placeholder: props.placeholder,
                  sx: {
                    color: Appcolors.textFiled,
                    fontSize: "13px",
                    padding: "12px 0px 12px 15px!important",
                  }
                }}
                sx={{
                  backgroundColor: props.disabled ? Appcolors.backgroundDisabled : "white",
                  marginBottom: "8px",
                  ".MuiFormHelperText-root": {
                    color: '#f44335 !important',
                    marginTop: "5px !important",
                    paddingLeft: "5px !important",
                    fontSize: "13px",
                  },
                  '& .MuiOutlinedInput-root': {
                    height: props.height ? props.height : "33px",
                    '& fieldset': {
                      borderColor: props.errors ? "#e91e63 !important" : "#cbd5e0 !important"
                    },
                    '&:hover fieldset': {
                      borderColor: "#a0a0a0 !important"
                    },
                    '&.Mui-focused fieldset': {
                      border: props.errors ? "1px solid #e91e63 !important" : "1px solid #1a73e8 !important"
                    },
                  },
                  "& .MuiOutlinedInput-input.Mui-disabled": {
                    "-webkit-text-fill-color": Appcolors.textFiledDisabled
                  },
                }}
              />
            )}
          /> :
          <DesktopDatePicker
            className="DesktopDatePicker"
            minTime={new Date()}
            disabled={props.disabled}
            // views={props.views ? props.views : ['day','month','year']}
            maxDate={props.maxDate ? props.maxDate : new Date()}
            minDate={props.minDate ? props.minDate : new Date(1990, 1, 13)}
            value={value}
            inputFormat={props.inputFormat ? props.inputFormat : "dd/MM/yyyy"}
            openTo={props.openTo ? props.openTo : "day"}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                helperText={props.errors && props.helperText}
                {...params}
                onBlur={props.handleOnBlur}
                onSubmit={props.handleOnSubmit}
                fullWidth
                inputProps={{
                  ...params.inputProps,
                  placeholder: props.placeholder,
                  sx: {
                    color: Appcolors.textFiled,
                    fontSize: FontSize.textField,
                    padding: "12px 0px 12px 15px!important",
                  }
                }}
                sx={{
                  backgroundColor: props.disabled ? Appcolors.backgroundDisabled : "white",
                  marginBottom: "8px",
                  ".MuiFormHelperText-root": {
                    color: '#f44335 !important',
                    marginTop: "5px !important",
                    paddingLeft: "5px !important",
                    fontSize: "13px",
                  },
                  '& .MuiOutlinedInput-root': {
                    height: props.height ? props.height : "33px",
                    '& fieldset': {
                      borderColor: props.errors ? "#e91e63 !important" : "#cbd5e0 !important"
                    },
                    '&:hover fieldset': {
                      borderColor: "#a0a0a0 !important"
                    },
                    '&.Mui-focused fieldset': {
                      border: props.errors ? "1px solid #e91e63 !important" : "1px solid #1a73e8 !important"
                    },
                  },
                  "& .MuiOutlinedInput-input.Mui-disabled": {
                    "-webkit-text-fill-color": Appcolors.textFiledDisabled
                  },
                }}
              />
            )}
          />
      }
    </LocalizationProvider>
  )
}

