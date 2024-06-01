import { useState, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginRoutes from "@routes";
import config from "@config/config.json";
import Layout from "./layout";
import DashBoard from "./dashBoard";
import Result from "./result";
import TaskDetail from "./taskDetail";
import Record from "./record";
import Upload from "./upload";
import Token from "./token";

export default function DispatchTask() {
  const [open, setOpen] = useState(true);
  const [taskPage, setTaskPage] = useState(config.taskPage.dashboard);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleChangeTaskPage = useCallback((newTaskPage) => {
    setTaskPage(newTaskPage);
  }, []);

  const handleUploadOnClick = () => {
    navigate("/dispatchTask/upload");
  };
  return (
    <Routes>
      <Route
        element={
          <Layout
            open={open}
            taskPage={taskPage}
            toggleDrawer={toggleDrawer}
            handleUploadOnClick={handleUploadOnClick}
            handleChangeTaskPage={handleChangeTaskPage}
          />
        }
      >
        <Route
          path="/"
          element={
            <LoginRoutes>
              <DashBoard toggleDrawer={toggleDrawer} open={open} />
            </LoginRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <LoginRoutes>
              <DashBoard />
            </LoginRoutes>
          }
        />
        <Route
          path="/record"
          element={
            <LoginRoutes>
              <Record />
            </LoginRoutes>
          }
        />
        <Route
          path="/token"
          element={
            <LoginRoutes>
              <Token />
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
      </Route>
    </Routes>
  );
}
