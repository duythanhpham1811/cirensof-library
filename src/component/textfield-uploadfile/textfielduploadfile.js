import { FormControl, Grid, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { MyButton } from '../button';
import FontSize from '../constants/fontSize';
import Appcolors from '../constants/colors';

export const MyTextFieldUploadFile = React.forwardRef(({
  width,
  required,
  helperText,
  label,
  height,
  errors,
  type,
  value,
  disabled,
  handleUploadfile,
  handleDelete,
  handleDowloadfile,
  dowloadFile = true,
  ...rest
}, ref) => {
  return (
    <div style={{ width: width ? width : "100%", paddingBottom: 8 }}>
      {required ?
        <Typography sx={{ marginBottom: FontSize.LabelMarginBottom, fontSize: FontSize.textFieldLabel }} variant="body2" color={helperText || errors ? "#f44335" : "#000000b3"}>{label}<span style={{ color: "red" }}> *</span></Typography>
        :
        <Typography sx={{ marginBottom: FontSize.LabelMarginBottom, fontSize: FontSize.textFieldLabel }} variant="body2" color={helperText || errors ? "#f44335" : "#000000b3"}>{label}</Typography>
      }
      <div style={{ display: "flex", gap: "10px" }}>
        <TextField
          {...rest}
          helperText={helperText || errors}
          variant="outlined"
          fullWidth
          disabled={disabled}
          value={value}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                {value !== "" ?
                  <div style={{ display: "flex", gap: "10px" }}>
                    {dowloadFile && <AttachFileIcon onClick={handleDowloadfile} style={{ fontSize: "16px", color: "#63c2de", cursor: "pointer" }} />}
                    {disabled ? "" :
                     <DeleteIcon onClick={() =>handleDelete(value)} style={{ fontSize: "16px", color: "orange", cursor: "pointer" }} />
                    }
                  </div>
                  :
                  <></>}
              </InputAdornment>
            ),
            sx: {
              height: height ? height : "33px !important",
              color: Appcolors.textFiled,
              fontSize: FontSize.textField,
              "& .MuiOutlinedInput-input": {
                textOverflow: 'ellipsis',
              },
            }
          }}
          sx={{
            backgroundColor: disabled ? Appcolors.backgroundDisabled : "white",
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
            "& .MuiOutlinedInput-input.Mui-disabled": {
              "-webkit-text-fill-color": Appcolors.textFiledDisabled
            },
          }}
        />
        {disabled ? "" :
         <MyButton
          icon={<FilePresentIcon />}
          txt="Tải tài liệu"
          component="label"
          style={{ height: "33px", width: "130px" }}
          uploadfile={true}
          handleUploadfile={(item) => {handleUploadfile(item)}}
        />
        }
      </div>
    </div>
  );
});


