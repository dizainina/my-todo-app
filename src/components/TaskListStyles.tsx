import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ababab24;
`;
export const TaskText = styled.span<{ completed: string | undefined }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#a9a9a9" : "#555")};
  transition: color 0.3s ease;
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ababab;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 20px;

  &:checked {
    appearance: none;
    clip-path: circle(50% at 50% 50%);
  }
  &:checked::after {
    content: "✓";
    color: green;
    font-size: 18px;
    margin-left: 3px;
  }
`;
