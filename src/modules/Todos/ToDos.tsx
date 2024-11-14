import { useState } from "react";
import { TaskList } from "../../components/TaskList/TaskList";
import arrow from "./arrow-grey.png";

import {
  ArrowButton,
  FadeWrapper,
  Header,
  Hr,
  Input,
  InputWrap,
  TodosWrap,
} from "./TodosWrapStyles";
import { Task } from "../../type/types";
import { FooterButtons } from "./FooterButtons";

const ToDos: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Функция для добавления задачи
  const handleAddTask = () => {
    const uniqueID = `id-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .slice(2)}`;

    if (newTask.trim()) {
      setTasks([...tasks, { id: uniqueID, text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Обработка нажатия клавиши
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  // Переключение состояния выполнения задачи
  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Удаление выполненных задач
  const removeCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Подсчет невыполненных задач
  const incompleteTasksCount = tasks.filter((task) => !task.completed).length;

  // Функция для фильтрации задач
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true;
  });

  return (
    <>
      <Header>todos</Header>
      <TodosWrap>
        <InputWrap>
          <ArrowButton onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <img src={arrow} width="100%" alt="" />
            ) : (
              <img
                src={arrow}
                width="100%"
                style={{ rotate: "180deg" }}
                alt=""
              />
            )}
          </ArrowButton>
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputWrap>

        <Hr />
        <FadeWrapper isOpen={isOpen}>
          <TaskList
            tasks={filteredTasks}
            toggleTaskCompletion={toggleTaskCompletion}
          />
          <FooterButtons
            activeFilter={activeFilter}
            incompleteTasksCount={incompleteTasksCount}
            handleFilterChange={handleFilterChange}
            removeCompletedTasks={removeCompletedTasks}
          />
        </FadeWrapper>
      </TodosWrap>
    </>
  );
};

export default ToDos;
