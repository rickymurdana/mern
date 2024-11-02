import { Router } from "express";
import { register, login, logout } from "../controllers/userController";

const router = Router();

// Route to register a new user
router.post("/register", register);

// Route to log in a user
router.post("/login", login);

// Route to log out a user
router.post("/logout", logout);

export default router;
