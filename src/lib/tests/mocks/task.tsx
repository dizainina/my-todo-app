import { Task } from "../../../type/types";

export const createMockedTask = (params: Partial<Task> = {}): Task => ({
  id: "id1",
  completed: false,
  text: "Task 1",
  ...params,
});

export const mockedTask = createMockedTask();
Object.freeze(mockedTask);
