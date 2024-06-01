import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddressContextProvider, IsLoginContextProvider } from "@context";
import LoginRoutes from "@routes";
import DispatchTask from "pages/dispatchTask";
import Login from "pages/login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavBar } from "./containers";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IsLoginContextProvider>
        <AddressContextProvider>
          <div className="flex flex-col fixed w-full h-full">
            <Router>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <LoginRoutes>
                      <DispatchTask />
                    </LoginRoutes>
                  }
                />
                <Route
                  path="/dispatchTask/*"
                  element={
                    <LoginRoutes>
                      <DispatchTask />
                    </LoginRoutes>
                  }
                />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Router>
          </div>
        </AddressContextProvider>
      </IsLoginContextProvider>
    </ThemeProvider>
  );
}

export default App;
