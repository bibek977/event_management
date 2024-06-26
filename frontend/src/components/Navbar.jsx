import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import AxiosInstance from './AxiosInstance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

export default function Navbar(props) {
    const {content} = props
    const location = useLocation()
    const path = location.pathname
    const navigate = useNavigate()

    const logoutUser = ()=>{
      AxiosInstance.post(`logout/`,{

      })
      .then(()=>{
        localStorage.removeItem("Token")
        localStorage.removeItem("User")
        navigate("/")
      })
    }

    const user = localStorage.getItem("User")

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Event Management
          </Typography>
          <Typography variant="h6" noWrap component="div">
            {/* <Avatar alt={user} src=""></Avatar> */}
            {user}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>

              <ListItem key={1} disablePadding>
                <ListItemButton component={Link} to="/home" selected={"/home"===path}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={2} disablePadding>
                <ListItemButton component={Link} to="/calendar" selected={"/calendar"===path}>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Calendar"} />
                </ListItemButton>
              </ListItem>

              {/* <ListItem key={5} disablePadding>
                <ListItemButton component={Link} to="/eventlist" selected={"/eventlist"===path}>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Event List"} />
                </ListItemButton>
              </ListItem> */}

              <ListItem key={3} disablePadding>
                <ListItemButton component={Link} to="/about" selected={"/about"===path}>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={4} disablePadding>
                <ListItemButton onClick={logoutUser}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>

          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

            {content}

      </Box>
    </Box>
  );
}