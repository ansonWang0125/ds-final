import express from "express";
import {
  login, signup, auth, logout
} from "../controllers/userController";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/auth", auth);

router.get("/logout", logout);

export default router;
