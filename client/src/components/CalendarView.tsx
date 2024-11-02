import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ITask } from "../types/types";
import "./Calendar.css";

interface CalendarViewProps {
  tasks: ITask[];
}

const CalendarView: React.FC<CalendarViewProps> = ({ tasks }) => {
  return (
    <div>
      <Calendar
        className="container"
        tileContent={({ date }) => {
          const dayTasks = tasks.filter(
            (task) => new Date(task.date).toDateString() === date.toDateString()
          );
          return (
            <ul>
              {dayTasks?.map((task: any, index: number) => (
                <li key={index}>{task.email}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default CalendarView;
