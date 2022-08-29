import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";

const drawerWidth = 240;

function ProfileSidebar(props) {
  const current_user = JSON.parse(localStorage.getItem("current_user"));
  console.log(current_user.role);
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      path: "users",
      name: "Users",
      icon: <PeopleIcon />,
      role: "admin",
    },
    {
      path: "create-collection",
      name: "Create Collection",
      icon: <CollectionsIcon />,
      role: "user",
    },
    {
      path: "collections",
      name: "Collections",
      icon: <CollectionsIcon />,
      role: "admin",
    },
    {
      path: "my-collections",
      name: "My Collections",
      icon: <CollectionsIcon />,
      role: "user",
    },
  ];
  const drawer = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item, index) => {
          if (item.role === current_user.role)
            return (
              <ListItem
                key={index}
                disablePadding
                onClick={() => navigate(`/profile/${item.path}`)}
                sx={{
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.15)" },
                }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#F6F9FC" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: "#F6F9FC" }} />
                </ListItemButton>
              </ListItem>
            );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          // boxShadow: "none",
          boxShadow: "0 0 11px rgb(0 0 0 / 13%)",
          background: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "rgb(52, 71, 103)" }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            color={"rgb(52, 71, 103)"}
          >
            Profile
          </Typography> */}
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
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "rgb(52, 71, 103)",
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
              background: "rgb(52, 71, 103)",
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

ProfileSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ProfileSidebar;
