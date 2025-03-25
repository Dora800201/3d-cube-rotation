import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("should render with the correct label", () => {
    const label = "Click Me";
    render(<Button label={label} onClick={() => {}} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button label="Click Me" onClick={mockOnClick} />);

    const button = screen.getByText("Click Me");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
