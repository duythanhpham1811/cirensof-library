import React from 'react'
import './styles.scss'
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export function MyModal(props) {
    const MyModal = styled(Modal)`
            ${props.width ? 
            `.modal-dialog{
              max-width: ${props.width};
            }` : 
            `.modal-dialog{
              max-width: 400px;
            }`
            }
        `;
    return (
        <MyModal show={props.open} onHide={props.close}
            aria-labelledby="contained-modal-title-vcenter"
            centered

            className="mymodal"
        >
            <Modal.Header closeButton className="mymodal_header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="mymodal_title" style={{}}>
                        {props.title && props.title}
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="mymodal_body">
                {props.content && props.content}
            </Modal.Body>
        </MyModal>
    )
}








// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// const BootstrapDialogTitle = (props) => {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// };

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export const MyModal = (props) => {
//   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogTitle-root': {
//       padding: theme.spacing(1,2),
//       width: `${(props.width)}px`
//     },
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(1,2),
//       width: `${(props.width)}px`
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//     '& .MuiPaper-root': {
//       maxWidth: `${(props.width + 64)}px`,
//       minWidth:props.width? `${(props.width)}px` :"400px"
//     },
//   }));

//   return (
//     <div>
//       <BootstrapDialog
//         open={props.open}
//       >
//         <BootstrapDialogTitle  id="customized-dialog-title" onClose={props.close}>
//           {props.title}
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
         
//          {props.component}
//         </DialogContent>
//       </BootstrapDialog>
//     </div>
//   );
// }

