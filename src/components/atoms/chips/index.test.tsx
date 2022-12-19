import { render, screen } from "@testing-library/react";
import Chips from ".";

it("Rendering Chip", () => {
  render(<Chips />);
  const chipEle = screen.getByText("Hello");
  expect(chipEle).toBeInTheDocument();
});
