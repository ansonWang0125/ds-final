import { Route, Routes } from "react-router-dom";
import { LoginRoutes } from "@routes";
import DashBoard from "./dashBoard";
import Result from "./result";
import TaskDetail from "./taskDetail";
import Upload from "./upload";

export default function DispatchTask() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginRoutes>
            <DashBoard />
          </LoginRoutes>
        }
      />
      <Route
        path="/dash_board"
        element={
          <LoginRoutes>
            <DashBoard />
          </LoginRoutes>
        }
      />
      <Route
        path="/result"
        element={
          <LoginRoutes>
            <Result />
          </LoginRoutes>
        }
      />
      <Route
        path="/task_detail"
        element={
          <LoginRoutes>
            <TaskDetail />
          </LoginRoutes>
        }
      />
      <Route
        path="/upload"
        element={
          <LoginRoutes>
            <Upload />
          </LoginRoutes>
        }
      />
    </Routes>
  );
}
