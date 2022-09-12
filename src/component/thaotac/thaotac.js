import { Popover, Tooltip, Typography } from '@mui/material'
import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import ReportIcon from '@mui/icons-material/Report';
import "./styles.scss"
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import BackupIcon from '@mui/icons-material/Backup';

export function MyThaoTac({
    handleEdit,
    handleDetail,
    handleDelete,
    handleMap,
    handleFile,
    handleSetting,
    handleCongBo,
    ...props }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickDelete = () => {
        setAnchorEl(null);
        handleDelete(props.prams.data)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="mythaotac">
            {handleSetting ?
                <Tooltip title="Cấu hình" arrow>
                    <SettingsIcon onClick={() => { handleSetting(props.prams.data) }} style={{ color: '#616161', fontSize: "20px" }} />
                </Tooltip>
                :
                ""
            }
            {handleMap ?
                <Tooltip title="Xem bản đồ" arrow>
                    <LanguageOutlinedIcon onClick={() => { handleMap(props.prams.data) }} style={{ color: '#63c2de', fontSize: "20px" }} />
                </Tooltip>
                :
                ""
            }
            {handleFile ?
                <Tooltip title="File đính kèm" arrow>
                    <DescriptionIcon onClick={handleFile} style={{ color: '#ff9800', fontSize: "20px" }} />
                </Tooltip>
                : ""
            }
            {handleDetail ?
                <Tooltip title="Xem chi tiết" arrow>
                    <InfoIcon onClick={() => { handleDetail(props.prams.data) }} style={{ color: '#3163c6', fontSize: "20px" }} />
                </Tooltip>
                :
                ""
            }
            {handleCongBo ?
                <Tooltip title="Công bố dữ liệu" arrow>
                    <BackupIcon onClick={() => { handleCongBo(props.prams.data) }} style={{ color: '#3163c6', fontSize: "20px" }} />
                </Tooltip>
                :
                ""
            }
            {handleEdit ?
                <Tooltip title="Sửa" arrow>
                    <ModeOutlinedIcon onClick={() => { handleEdit(props.prams.data) }} style={{ color: '#63c2de', fontSize: "20px" }} />
                </Tooltip>
                :
                ""
            }
            {handleDelete ?
                <Tooltip title="Xóa" arrow>
                    <DeleteOutlineIcon onClick={handleClick} style={{ color: '#f44336', fontSize: "20px" }} />
                </Tooltip>
                : ""
            }
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className="mythaotac__delete">
                    <div className="mythaotac__delete__title">
                        <ReportIcon sx={{ color: "orange" }} />
                        <Typography
                            color={'#00000099'}
                        >Xóa bản ghi này ? </Typography>
                    </div>
                    <div className="mythaotac__delete__button">
                        <p onClick={handleClose}>Hủy</p>
                        <p onClick={handleClickDelete}>Xóa</p>
                    </div>
                </div>
            </Popover>
        </div>
    )
}
