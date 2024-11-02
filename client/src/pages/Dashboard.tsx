import React, { useEffect, useState } from "react";
import CalendarView from "../components/CalendarView";
import TaskModal from "../components/TaskModal";
import { getTasks } from "../services/taskService";
import { ITask } from "../types/types";
import TopBar from "../components/TopBar";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  return (
    <div>
      <TopBar />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <button className="button" onClick={() => setShowModal(true)}>
          Create Task
        </button>
      </div>
      <CalendarView tasks={tasks} />
      {showModal && (
        <TaskModal
          onClose={() => setShowModal(false)}
          onTaskCreated={fetchTasks}
        />
      )}
    </div>
  );
};

export default Dashboard;
