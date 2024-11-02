import { Router } from "express";
import { createTask, getTask } from "../controllers/taskController";

const router = Router();

// Route to get all tasks
router.get("/", getTask);

// Route to create a new task and send an email
router.post("/", createTask);

export default router;
