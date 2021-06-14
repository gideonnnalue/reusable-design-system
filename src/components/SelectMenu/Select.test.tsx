import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Select from "./Select";
import App from "../../App";

import { items, itemsDivided } from "../../constants";

// afterEach(cleanup);
beforeEach(() => {
  render(
    <App>
      <Select options={items} isExtendible={false} onChange={() => {}} />
    </App>
  );
});

describe("Select Component", () => {
  test("should take a snapshot", () => {
    const { asFragment } = render(
      <App>
        <Select options={items} isExtendible={false} onChange={() => {}} />
      </App>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should not have Antonelli text", () => {
    expect(screen.getByTestId("selected-text")).not.toHaveTextContent(
      "Antonelli"
    );
  });
  test(`should contain ${items[0].value} text`, () => {
    expect(screen.getByTestId("selected-text")).toHaveTextContent(
      items[0].value
    );
  });

  test("should have a role attribute", () => {
    expect(screen.getByTestId("select-button")).toHaveAttribute("role");
  });

  test("text should be changed when clicked", () => {
    expect(screen.getByTestId("bartik")).toHaveTextContent("Bartik");
    fireEvent.click(screen.getByTestId("bartik"));
    expect(screen.getByTestId("selected-text")).toHaveTextContent("Bartik");
    fireEvent.click(screen.getByTestId("teitelbaum"));
    expect(screen.getByTestId("selected-text")).toHaveTextContent("Teitelbaum");
  });
});
