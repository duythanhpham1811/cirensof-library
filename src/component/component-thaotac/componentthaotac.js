import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.scss'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Tooltip } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Offcanvas } from 'react-bootstrap';

export function MyComponentThaoTac(props) {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(props.expand ? props.expand : true);
  const tableselector = useSelector(props.tableSelector) 
  const dispatch = useDispatch();
  
  useEffect(() => {
    setShow(tableselector.detail)
  }, [tableselector.detail]);

  useEffect(() => {
    if(props.fullsize){
      dispatch(props.tableReducer.actions.openfullsize())
    }
  },[])

  const handlefullsize = () => {
    dispatch(props.tableReducer.actions.handlefullsize())
  } 

  return (
    <Offcanvas show={show} scroll={false} backdrop={false} placement={"end"} 
      style={{width:tableselector.fullsize ? "calc(100vw - 220px)" : "600px",
    }}>
      <Offcanvas.Header closeButton>
        <Tooltip title="Đóng">
          <KeyboardDoubleArrowRightIcon  sx={{fontSize:"23px", color:"#37352f73",cursor:'pointer'}}   
            onClick={()=>{
              dispatch(props.tableReducer.actions.offdetail())
            }}
          />
        </Tooltip>
        {expand &&  
          <Tooltip title="Mở rộng">
              <OpenInFullIcon  sx={{fontSize:"16px", color:"#37352f73",cursor:'pointer'}}   
                  onClick={()=>{
                    handlefullsize()
                  }}
                />
          </Tooltip> 
        } 
      </Offcanvas.Header>
      <Offcanvas.Body>
        {props.content && tableselector.detail ? props.content : ""}
      </Offcanvas.Body>
    </Offcanvas>
  )
}
