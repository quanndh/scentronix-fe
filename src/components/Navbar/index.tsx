"use client";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Container,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.scss";
import HideOnScroll from "@/components/Navbar/HideOnScroll";
import { menuItems } from "@/constants/routes";
import { useRouter } from "next/navigation";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button sx={{ my: 2 }} onClick={() => router.push("/")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2915/2915852.png"
          className={styles.icon}
        />
      </Button>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => router.push(item.path)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <HideOnScroll>
        <AppBar component="nav" className={styles.container}>
          <Toolbar className={styles.navContainer}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2915/2915852.png"
                className={styles.icon}
                onClick={() => router.push("/")}
              />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  className={styles.navItem}
                  onClick={() => router.push(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <nav>
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
