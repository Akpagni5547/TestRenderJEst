/**
 * @jest-environment jsdom
 */
import Home from "./index";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

it("should render", () => {
  render(<Home />);
  const main = screen.getByTestId("helios");

  expect(main.textContent).toBe("Helios");
});
