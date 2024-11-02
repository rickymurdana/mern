import axios from "axios";
import { ITask } from "../types/types";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response);
  return response.data.tasks;
};

export const createTask = async (task: ITask) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(API_URL, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
