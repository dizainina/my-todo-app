import { render, screen, fireEvent } from "@testing-library/react";
import { TaskList } from "./TaskList";
import { createMockedTask, mockedTask } from "../../lib/tests/mocks/task";

describe("TaskList Component", () => {
  const renderComponent = () =>
    render(
      <TaskList tasks={tasks} toggleTaskCompletion={mockToggleTaskCompletion} />
    );

  const mockToggleTaskCompletion = jest.fn();

  const tasks = [
    mockedTask,
    createMockedTask({ id: "id2", text: "Task 2", completed: true }),
  ];

  it("renders task list with correct number of tasks", () => {
    renderComponent();

    const taskItems = screen.getAllByRole("checkbox");
    expect(taskItems).toHaveLength(tasks.length);
  });

  it("toggles task completion when checkbox is clicked", () => {
    renderComponent();

    const firstCheckbox = screen.getByLabelText("Task 1");
    fireEvent.click(firstCheckbox);

    expect(mockToggleTaskCompletion).toHaveBeenCalledWith(0);
  });
});
