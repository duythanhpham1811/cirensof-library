import { Button } from "@mui/material";
import React, { Fragment, useEffect } from "react";

import ClearIcon from "@mui/icons-material/Clear";

export function MyThongBao({
  enqueueSnackbar,
  closeSnackbar,
  code,
  message,
  type,
}) {

  const data = check(code,message,type);

  const action = (key) => (
    <Fragment>
      <Button
        onClick={() => {
          closeSnackbar(key);
        }}
      >
        <ClearIcon style={{ color: "white" }} />
      </Button>
    </Fragment>
  );

  enqueueSnackbar(data.message, {
    action,
    variant: type ? type :data.variant,
    autoHideDuration: 2000,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
}

function check (code,message,type){
  if(code){
    switch (code) {
      case 299:
        return ({variant :"warning", message: message ? message : "Có lỗi xảy ra"})
      case 500:
        return ({variant :"error", message: message ? message : "Có lỗi xảy ra"})
      case 400:
        return ({variant :"error", message : "Cú pháp không hợp lệ"})
      case 401:
        return ({variant :"error", message : "Không xác thực"})
      case 404:
        return ({variant :"error", message : "Không tìm thấy dữ liệu"})
      case 408:
        return ({variant :"error", message : "Hết thời gian yêu cầu máy chủ"})
      case 502:
        return ({variant :"error", message : "Hệ thống không phản hồi"})
      case 503:
        return ({variant :"error", message : "Máy chủ không phản hồi do quá thời gian"})
      default:
        return ({variant :"error", message: message ? message : "Có lỗi xảy ra"})
    }
  }
  else{
    return ({variant :type, message: message})
  }
}