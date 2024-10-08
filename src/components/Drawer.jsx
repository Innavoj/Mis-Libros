import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
//import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AvatarButton from "./Avatar";
import { Badge, Grid, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
//import InventoryIcon from "@mui/icons-material/Inventory";
//import HomeIcon from "@mui/icons-material/Home";

const organizacion = "Store Books";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  //const [open] = React.useState(true);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Typography variant="h6"  sx={{textAlign: "center", alignItems: "center"}}>{organizacion}</Typography>

      <Toolbar />
      <Divider />
      <List  >
        {[
          {
            title: "Dashboard",
            linked: "/",
            icon: <DashboardIcon />,
          },
          {
            title: "My Books",
            linked: "/misbooks",
            icon: <MenuBookIcon />,
          },
          {
            title: "Products",
            linked: "/productos",
            icon: <ShoppingCartIcon />,
          },
        ].map((text) => (
          <ListItem  key={text.title} disablePadding sx={{ display: "block"}} >
            <Link to={text.linked}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent:  "center",
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {text.icon}
                </ListItemIcon>

                <ListItemText
                  primary={text.title}
                  sx={{ color: "white" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            title: "About",
            linked: "/about",
            icon: <InfoIcon />,
          },
          {
            title: "Logout",
            linked: "/",
            icon: <LogoutIcon />,
          },
        ].map((text) => (
          <ListItem key={text.title} disablePadding sx={{ display: "block" }}>
            <Link to={text.linked}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:  "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {text.icon}
                </ListItemIcon>

                <ListItemText
                  primary={text.title}
                  sx={{ color: "white"  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="bar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          <IconButton children={<SearchIcon />} size="large" color="primary"/>
            
          <Grid
            container
            direction="row"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="end"
             
          > 
              <Stack direction="row" display="flex" alignItems="center" justifyContent="end"  spacing={2}>
                <IconButton children={<PeopleIcon />} size="large" />
                <IconButton size="large" >
                  <Badge badgeContent={1} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <AvatarButton />
              </Stack>
         
          </Grid> 
         
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer 
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          onClick={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(7,2,61)",  // #12121b
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
           
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(7,2,61)",  // #12121b
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
