import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render correctly App component", () => {
    render(<App />);

    expect(screen.getByTestId("App")).toBeInTheDocument();
  });
});
