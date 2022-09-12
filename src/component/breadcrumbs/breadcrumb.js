import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import './styles.scss'

export const  MyBreadCrumbs = () => {
  return (
    <div role="presentation" className="my-breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" fontSize="15px">
          Trang chủ
        </Link>
        <Link underline="hover" color="inherit"  fontSize="15px">
          Danh mục
        </Link>
        <Link underline="hover" color="inherit"  fontSize="15px">
          Đơn vị
        </Link>
      </Breadcrumbs>
    </div>
  )
}
