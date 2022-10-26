import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.scss'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Tooltip } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Offcanvas } from 'react-bootstrap';


export function MyComponentThaoTac(props) {
  const tableselector = useSelector(props.tableSelector) 
  const [expand, setExpand] = useState(props.expand ? props.expand : true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.fullsize) {
      dispatch(props.tableReducer.actions.openfullsize())
    }
  }, [])

  const handlefullsize = () => {
    dispatch(props.tableReducer.actions.handlefullsize())
  }

  return (
    <div className="component-chitiet"
      style={{
        width: tableselector.detail && tableselector.fullsize === false ? props.width
          : tableselector.detail && tableselector.fullsize === true ? props.widthFullSize
            : "0px",
        padding: "0px"
      }}>
      <div>
        <div className="component-chitiet__thaotac">
          {tableselector.detail &&
            <Tooltip title="Đóng">
              <KeyboardDoubleArrowRightIcon sx={{ fontSize: "23px", color: "#37352f73", cursor: 'pointer' }}
                onClick={() => {
                  dispatch(props.tableReducer.actions.offdetail())
                }}
              />
            </Tooltip>
          }
          {expand &&
            <Tooltip title="Mở rộng">
              <OpenInFullIcon sx={{ fontSize: "16px", color: "#37352f73", cursor: 'pointer' }}
                onClick={() => {
                  handlefullsize()
                }}
              />
            </Tooltip>
          }
        </div>
        <div className="component-chitiet__content">
          {props.content && tableselector.detail ? props.content : ""}
        </div>
      </div>
    </div>
  )
}

// bản cũ

// export function MyComponentThaoTac(props) {
//   const [show, setShow] = useState(false);
//   const [expand, setExpand] = useState(props.expand ? props.expand : true);
//   const tableselector = useSelector(props.tableSelector) 
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     setShow(tableselector.detail)
//   }, [tableselector.detail]);

//   useEffect(() => {
//     if(props.fullsize){
//       dispatch(props.tableReducer.actions.openfullsize())
//     }
//   },[])

//   const handlefullsize = () => {
//     dispatch(props.tableReducer.actions.handlefullsize())
//   } 

//   return (
//     <Offcanvas show={show} scroll={false} backdrop={false} placement={"end"} 
//       style={{width:tableselector.fullsize ? props.widthFullSize : props.width,
//     }}>
//       <Offcanvas.Header closeButton>
//         <Tooltip title="Đóng">
//           <KeyboardDoubleArrowRightIcon  sx={{fontSize:"23px", color:"#37352f73",cursor:'pointer'}}   
//             onClick={()=>{
//               dispatch(props.tableReducer.actions.offdetail())
//             }}
//           />
//         </Tooltip>
//         {expand &&  
//           <Tooltip title="Mở rộng">
//               <OpenInFullIcon  sx={{fontSize:"16px", color:"#37352f73",cursor:'pointer'}}   
//                   onClick={()=>{
//                     handlefullsize()
//                   }}
//                 />
//           </Tooltip> 
//         } 
//       </Offcanvas.Header>
//       <Offcanvas.Body>
//         {props.content && tableselector.detail ? props.content : ""}
//       </Offcanvas.Body>
//     </Offcanvas>
//   )
// }
