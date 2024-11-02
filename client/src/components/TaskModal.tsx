import React, { useState } from "react";
import { createTask } from "../services/taskService";
import { ITask } from "../types/types";
import "./TaskModal.css";

interface TaskModalProps {
  onClose: () => void;
  onTaskCreated: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ onClose, onTaskCreated }) => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const newTask: ITask = { email, date, description };
    await createTask(newTask);
    onTaskCreated();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Create Task</h2>
          <span style={{ cursor: "pointer" }} onClick={onClose}>
            x
          </span>
        </div>
        <div className="modal-field">
          <label>Email</label>
          <input
            type="email"
            className="modal-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <label>Date</label>
          <input
            type="date"
            className="modal-input"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="modal-field">
          <label>Description</label>
          <textarea
            value={description}
            className="modal-input"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          ></textarea>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Send Email
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
