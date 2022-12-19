import { render, screen } from "@testing-library/react";
import ChipList from ".";

it("Rendering Chip", () => {
  render(<ChipList labelList={["Hello", "World", "New", "Year"]} />);
  const chipEles = screen.getAllByTestId("custom-chips");
  expect(chipEles.length).toBe(4);
});
