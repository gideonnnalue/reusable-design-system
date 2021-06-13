import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Select from "./Select";
import Option from "./Option";
import Divider from "./Divider";
import App from "../../App";

// afterEach(cleanup);
beforeEach(() => {
  render(
    <App>
      <Select defaultValue="hopper" onChange={() => {}}>
        <Option value="hopper">Hopper</Option>
        <Option value="holberton">Holberton</Option>
        <Divider />
        <Option value="antonelli">Antonelli</Option>
        <Option value="bartik">Bartik</Option>
        <Option value="teitelbaum">Teitelbaum</Option>
      </Select>
    </App>
  );
});

describe("Select Component", () => {
  // test("should take a snapshot", () => {
  //   const { asFragment } = render(
  //     <App>
  //       <Select defaultValue="hopper" onChange={() => {}}>
  //         <Option value="hopper">Hopper</Option>
  //         <Option value="holberton">Holberton</Option>
  //         <Divider />
  //         <Option value="antonelli">Antonelli</Option>
  //         <Option value="bartik">Bartik</Option>
  //         <Option value="teitelbaum">Teitelbaum</Option>
  //       </Select>
  //     </App>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });

  test("should be false", () => {
    expect(screen.getByTestId("selected-text")).not.toHaveTextContent(
      "Antonelli"
    );
  });

  test("should have a role attribute", () => {
    expect(screen.getByTestId("select-button")).toHaveAttribute("role");
  });

  test("hold contain the hopper", () => {
    expect(screen.getByText("Hopper")).toBeInTheDocument();
  });

  test("text should be changed when clicked", () => {
    expect(screen.getByTestId("bartik")).toHaveTextContent("Bartik");
    fireEvent.click(screen.getByTestId("bartik"));
    expect(screen.getByTestId("selected-text")).toHaveTextContent("Bartik");
    fireEvent.click(screen.getByTestId("teitelbaum"));
    expect(screen.getByTestId("selected-text")).toHaveTextContent("Teitelbaum");
  });
});
