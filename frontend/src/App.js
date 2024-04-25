import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserDataContextProvider } from "@context";
import { LoginRoutes } from "@routes";
import DispatchTask from "pages/dispatchTask";
import ProvideGpu from "pages/provideGpu";
import Login from "pages/login";
import Signup from "pages/signup";
import Main from "pages";
import { NavBar } from "./containers";

function App() {
  return (
    <UserDataContextProvider>
      <div className="flex flex-col">
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <LoginRoutes>
                  <Main />
                </LoginRoutes>
              }
            />
            <Route
              path="/dispatch_task/*"
              element={
                <LoginRoutes>
                  <DispatchTask />
                </LoginRoutes>
              }
            />
            <Route
              path="/provide_gpu/*"
              element={
                <LoginRoutes>
                  <ProvideGpu />
                </LoginRoutes>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </UserDataContextProvider>
  );
}

export default App;
