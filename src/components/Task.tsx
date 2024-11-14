import React from "react";

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} />
      {task.text}
    </li>
  );
};
