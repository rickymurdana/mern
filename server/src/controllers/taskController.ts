import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Task from "../models/Task";
import { sendTemplateEmail } from "../utils/sendEmail";

const authenticateToken = (req: Request, res: Response, next: Function) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access token missing" });

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    (req as any).user = user;
    next();
  });
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.status(201).json({ message: "sukses", tasks });
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { email, date, description } = req.body;

  try {
    const task = new Task({ email, date, description });
    await task.save();

    // Send email using the template
    // await sendTemplateEmail(email);

    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err });
  }
};
