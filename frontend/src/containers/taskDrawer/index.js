import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import IconTextButton from "@components/iconTextButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import config from "@config/config.json";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function TaskDrawer({ open, taskPage, toggleDrawer, handleUploadOnClick, handleChangeTaskPage }) {
  const navigate = useNavigate();
  const handleOnClickDashboard = () => {
    handleChangeTaskPage(config.taskPage.dashboard);
    navigate("/dispatchTask/dashboard");
  };
  const handleOnClickRecord = () => {
    handleChangeTaskPage(config.taskPage.record);
    navigate("/dispatchTask/record");
  };
  const handleOnClickToken = () => {
    handleChangeTaskPage(config.taskPage.token);
    navigate("/dispatchTask/token");
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 使用 "justify-between" 将项目分别放置在容器两侧
          px: [1],
        }}
      >
        <div className="flex items-center">
          {open ? <IconTextButton icon={<AddIcon />} text="ADD NEW TASK" onClick={handleUploadOnClick} /> : null}
        </div>
        <IconButton onClick={toggleDrawer}>{open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>{" "}
      </Toolbar>

      <Divider />
      <List component="nav">
        <ListItemButton selected={taskPage === config.taskPage.dashboard} onClick={handleOnClickDashboard}>
          <ListItemIcon>
            <DashboardIcon color={taskPage === config.taskPage.dashboard ? "primary" : ""} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton selected={taskPage === config.taskPage.record} onClick={handleOnClickRecord}>
          <ListItemIcon>
            <ManageSearchIcon color={taskPage === config.taskPage.record ? "primary" : ""} />
          </ListItemIcon>
          <ListItemText primary="Record" />
        </ListItemButton>
        <ListItemButton selected={taskPage === config.taskPage.token} onClick={handleOnClickToken}>
          <ListItemIcon>
            <MonetizationOnIcon color={taskPage === config.taskPage.token ? "primary" : ""} />
          </ListItemIcon>
          <ListItemText primary="Token" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
