import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ToDos from "./ToDos";

describe("ToDos", () => {
  const renderComponent = () => render(<ToDos />);

  it("renders todos header", () => {
    renderComponent();
    const headerElement = screen.getByText(/todos/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("adds a new task on Enter key press", () => {
    renderComponent();
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    const taskListElement = screen.getByTestId("tasklist");
    expect(taskListElement).toBeInTheDocument();
  });

  it("filters tasks correctly", () => {
    renderComponent();
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: "Task 1" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    fireEvent.change(inputElement, { target: { value: "Task 2" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    fireEvent.click(screen.getByText(/Task 1/i));

    fireEvent.click(screen.getByText(/active/i));
    const task1Element = screen.queryByText(/Task 1/i);
    const task2Element = screen.getByText(/Task 2/i);

    expect(task1Element).not.toBeInTheDocument();
    expect(task2Element).toBeInTheDocument();
  });

  it("removes completed tasks", () => {
    render(<ToDos />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: "Task 1" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    fireEvent.change(inputElement, { target: { value: "Task 2" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    fireEvent.click(screen.getByText(/Task 1/i));

    const removeButton = screen.getByTestId("remove-button");
    fireEvent.click(removeButton);

    const task1Element = screen.queryByText(/Task 1/i);
    const task2Element = screen.getByText(/Task 2/i);

    expect(task1Element).not.toBeInTheDocument();
    expect(task2Element).toBeInTheDocument();
  });
});
