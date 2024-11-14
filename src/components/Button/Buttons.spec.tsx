import { render, screen, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";

describe("Button", () => {
  const renderComponent = (props: Partial<ButtonProps> = {}) =>
    render(<Button children="test" testId="button" {...props} />);

  it("should render child", () => {
    renderComponent({ children: "test label" });
    const button = screen.getByTestId("button");
    expect(button.textContent).toEqual("test label");
  });

  it("should call onClick when clicked", () => {
    const mockOnClick = jest.fn();
    renderComponent({ onClick: mockOnClick });

    const button = screen.getByTestId("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
