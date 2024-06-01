import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { MuiTypography, MuiIconButton, MuiButton } from "@components";
import { UseAddressContext } from "@context/addressCtx";
import { UseIsLoginContext } from "@context/isLoginCtx";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function NavBar() {
  const { isLogin, changeIsLogin } = UseIsLoginContext();
  const { changeAddress } = UseAddressContext();
  const onPressLogout = () => changeAddress("");
  const navigate = useNavigate();
  const handleLogoutOnClick = () => {
    changeIsLogin(false);
    onPressLogout();
    window.location.reload(false);
  };
  const handleTitleOnClick = () => {
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MuiIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleTitleOnClick}
          >
            <HomeIcon />
          </MuiIconButton>
          <MuiTypography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleTitleOnClick}>
            <button type="button">Sharing GPU</button>
          </MuiTypography>
          <MuiButton onClick={handleLogoutOnClick}>{isLogin ? "Logout" : "Login"}</MuiButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
