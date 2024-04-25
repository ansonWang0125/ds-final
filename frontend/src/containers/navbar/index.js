import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { MuiTypography, MuiIconButton, MuiButton } from "@components";
import { UseUserDataContext } from "@context/userDataCtx";
import { userLogout } from "functions/axiosApi";
import isDataLogin from "functions/util";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { userData, changeUserData } = UseUserDataContext();
  const navigate = useNavigate();
  const handleLoginOnClick = async () => {
    changeUserData({ username: "", userID: "" });
    await userLogout();
    window.location.reload(false);
  };
  const handleTitleOnClick = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MuiIconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </MuiIconButton>
          <MuiTypography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleTitleOnClick}>
            <button type="button">Sharing GPU</button>
          </MuiTypography>
          <MuiButton onClick={handleLoginOnClick}>{isDataLogin(userData) ? "Logout" : "Login"}</MuiButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
