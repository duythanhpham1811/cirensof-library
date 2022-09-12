import { FastField, Formik } from 'formik';
import React from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from '@mui/icons-material/Description';
import "./styles.scss"
import { MyButton } from '../button';
import { Search } from '../search';

export const MyForm = ({childrenSearch, children, dataFormik, validationSchema, onSubmitAPI, handleAdd, showSearch,showExcel,handleExportExcel,handleImportExcel, editable = true }) => {
  return (
    <div className="myform">
      <Formik
        enableReinitialize={true}
        initialValues={dataFormik}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onSubmitAPI(values);
        }}
        render={(props) => (
          <form onSubmit={props.handleSubmit} autoComplete="false" >
            <div>
              {showSearch ?
                <div className="myform__select">
                  <FastField
                    name="search"
                    render={({ field }) => (
                      <Search placeholder="Tìm kiếm..." {...field} />
                    )}
                  />
                  <MyButton
                    txt="Tìm kiếm"
                    type="submit"
                    // style={{width: 150, height: 26}}
                    icon={<SearchRoundedIcon />}
                  />
                  {editable &&
                  <MyButton
                    onClick={handleAdd}
                    txt="Thêm mới"
                    // style={{width: 160, height: 26}}
                    icon={<AddIcon />}
                  />}
                  {showExcel && editable &&
                  <MyButton
                    txt="Xuất File Excel" color="#1da51de6"
                    onClick={handleExportExcel}
                    icon={<DescriptionIcon />}
                  />}
                  {showExcel && editable && 
                  <MyButton
                    txt="Nhập File Excel" color="#1da51de6"
                    onClick={handleImportExcel}
                    icon={<UploadFileIcon />}
                  />}
                  {childrenSearch ? childrenSearch : null}
                    </div> : ""
                  }
               {children ? children(props) : null}
            </div>
          </form>
        )}
      />
    </div>
  )
}
