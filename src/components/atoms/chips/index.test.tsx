import { render, screen } from "@testing-library/react";
import Chips from ".";

it("Rendering Chip", () => {
  render(<Chips label={"Hello"} />);
  const chipEle = screen.getByText(/Hello/i);
  expect(chipEle).toBeInTheDocument();
});
