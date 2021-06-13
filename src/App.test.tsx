import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("check tests", () => {
  console.log("working");
});

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it("should take a snapshot", () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment()).toMatchSnapshot();
// });
