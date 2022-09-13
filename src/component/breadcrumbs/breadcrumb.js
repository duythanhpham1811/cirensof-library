import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom';

export const  MyBreadCrumbs = (props) => {
  let navigate = useNavigate();  //chuyển trang

  const home =() =>{
      navigate("/trangchu")
  }
  const link =(value) =>{
    if(value !== undefined){
        navigate(value)
    }
}

  return (
    <div role="presentation" className="my-breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={home} fontSize="15px">
          Trang chủ
        </Link>
        {props.title && 
            props.title.map((e,index)=>{
               return  <Link 
                underline="hover" 
                onClick={()=>{link(e.link)}} 
                color={index === props.title.length-1 ? "#057db2" : "inherit"}
                fontSize="15px"
                >
                        {e.name}
                    </Link>
            })
        }
      </Breadcrumbs>
    </div>
  )
}
