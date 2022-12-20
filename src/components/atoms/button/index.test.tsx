import { render, screen } from "@testing-library/react";
import ButtonComp from ".";

it("Rendering Button", () => {
  render(<ButtonComp label={"Hello"} />);
  const chipEle = screen.getByText(/Hello/i);
  expect(chipEle).toBeInTheDocument();
});
