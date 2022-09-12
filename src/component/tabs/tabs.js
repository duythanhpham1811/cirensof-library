import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from '@mui/material/styles';


const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontSize:"13.5px",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
    padding:"5px 5px",
    color: '#344767',
    opacity:"0.7",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
    },
    '&.Mui-selected': {
      opacity:"1",
      fontWeight: 500,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

export function MyTabs(props) {
  const listTitle = props.listTitle ? props.listTitle : [];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleTap(newValue)
  };

  return (
    <div className = "mystep">
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {listTitle.map((e,index)=>{
                    return <AntTab label={e} value={index}/>
                  })}
                </TabList>
              </Box>
              <TabPanel 
              sx={{
                padding:props.padding ? props.padding : "10px"
              }}
              value={value}>{props.children}</TabPanel>
            </TabContext>
          </Box>
    </div>
  )
}

