import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { TaskDrawer } from "@containers";

function Layout({ open, taskPage, toggleDrawer, handleUploadOnClick, handleChangeTaskPage }) {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TaskDrawer
          open={open}
          taskPage={taskPage}
          toggleDrawer={toggleDrawer}
          handleUploadOnClick={handleUploadOnClick}
          handleChangeTaskPage={handleChangeTaskPage}
        />
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;
