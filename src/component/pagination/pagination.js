import { FormControl, MenuItem, Pagination, Select } from '@mui/material'
import React, { useEffect } from 'react'
import "./pagination.scss"
import { useState } from 'react'

const pageList =[
    { value: "10", label: "10 / Trang" },
    { value: "20", label: "20 / Trang" },
    { value: "30", label: "30 / Trang" }
]

export const MyPagination = (props) => {
  const [page,setPage] = useState(null);
  const [age, setAge] = React.useState(pageList[0]);

  const handleChange = (event) => {
      setAge(event.target.value);
  };

  useEffect(() => {
    setPage(props.page)
  },);

  return (
    <div className="table__pagination">
        <div style={{ width: "105px"}}>
            <FormControl fullWidth>
                <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{
                    height:"27px",
                    fontSize:"13px",
                    paddingLeft:"0px",
                    marginLeft:"0px",
                    "&:hover":{
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
                            borderColor:"#2196f3"
                        },
                    },
                    ".MuiSelect-icon":{
                        color:'#aca6a6'
                    },
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
                        borderWidth:"1px !important",
                    },
                    ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
                        padding:"5px 0px",
                    },
                    ".MuiSelect-outlined":{
                        paddingLeft:"10px",
                    }

                }}
                >
                {pageList.map((item)=>
                     <MenuItem sx={{fontSize:"14px"}} value={item}>
                        {item.label}
                    </MenuItem>
                )}
                </Select>
            </FormControl>
        </div>
        <Pagination 
        page={page}
        onChange={props.onChangePage}
        count={props.count}
        sx={{
        ".Mui-selected":{
            backgroundColor:"#169ad5 !important",
            color:'white'
        }
        }}
        shape="rounded"
        size="small"
        />
    </div>
  )
}
