import { Footer } from "./TodosWrapStyles";
import { Button } from "../../components/Button/Button";

interface FooterButtonsProps {
  activeFilter: string;
  incompleteTasksCount: number;
  handleFilterChange: (filter: string) => void;
  removeCompletedTasks: () => void;
}

export const FooterButtons: React.FC<FooterButtonsProps> = ({
  activeFilter,
  incompleteTasksCount,
  handleFilterChange,
  removeCompletedTasks,
}) => {
  return (
    <Footer>
      <span>{incompleteTasksCount} items left</span>
      <Button
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        className={activeFilter === "active" ? "active" : ""}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        className={activeFilter === "completed" ? "active" : ""}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
      <Button onClick={removeCompletedTasks}>Clear completed</Button>
    </Footer>
  );
};
