import React from "react";
import { Checkbox, Li, TaskText, Ul } from "./TaskListStyles";
import { Task } from "../type/types";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (index: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTaskCompletion,
}) => {
  return (
    <Ul>
      {tasks.map((task, index) => (
        <Li key={index} className={task.completed ? "true" : undefined}>
          <label>
            <Checkbox
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <TaskText
              completed={task.completed ? task.completed.toString() : undefined}
            >
              {task.text}
            </TaskText>
          </label>
        </Li>
      ))}
    </Ul>
  );
};
