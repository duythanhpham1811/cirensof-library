import React from 'react'
import Button from '@mui/material/Button';

export const MyButton = React.forwardRef(({
  height,
  type,
  onClick,
  disabled,
  color,
  icon,
  width,
  fontSizeIcon,
  txt,
  handleUploadfile,
  uploadfile,
  marginRightStartIcon,
  multiple = false,
  ...rest
}, ref) => {
  return (
    <Button type={type} onClick={onClick}
      disabled={disabled != null ? !disabled : false}
      sx={{
        '&.MuiButton-containedPrimary': {
          backgroundColor: color ? color : '#169ad5',
          fontSize: '11px',
          minWidth: width,
          color: "#ffffff",
          textTransform: "none",
          boxShadow: "none",
        },
        ".MuiButton-startIcon>*:nth-of-type(1)":{
          fontSize: fontSizeIcon && fontSizeIcon
        },
        "& .MuiButton-endIcon": { paddingBottom: '0px' },
        "& .MuiButton-startIcon": { paddingBottom: '0px', marginRight: marginRightStartIcon ? marginRightStartIcon : "3px"}
      }}
      style={{ height: height ? height : '26px' }}
      variant="contained" size="small"
      startIcon={icon}
      {...rest}
    >
      <div style={{ paddingTop: 0 }}>{txt}</div>
      {uploadfile === true ?
        <input
          type="file"
          hidden
          multiple={multiple}
          onClick={(event) => {
            event.target.value = null
          }}
          onChange={(item) => handleUploadfile(item)}
        /> : ""}
    </Button>
  )
});

