//import SideBar from "../components/SideBar";
import MiniDrawer from "../components/Drawer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
//import Footer from "../components/Footer";

export default function MainLayouts() {
  return (
    <>
      <MiniDrawer />
      <main>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </main>
      
    </>
  );
}
