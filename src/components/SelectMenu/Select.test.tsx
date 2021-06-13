import React from "react";
import { render, cleanup } from "@testing-library/react";

import Select from "./Select";
import Option from "./Option";
import Divider from "./Divider";
import App from "../../App";

// afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(
    <App>
      <Select defaultValue="" onChange={() => {}}>
        <Option value="hopper">Hopper</Option>
        <Option value="holberton">Holberton</Option>
        <Divider />
        <Option value="antonelli">Antonelli</Option>
        <Option value="bartik">Bartik</Option>
        <Option value="teitelbaum">Teitelbaum</Option>
        <Option value="bartik">Bartik</Option>
      </Select>
    </App>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should have a role attribute", () => {
  const { getByTestId } = render(
    <App>
      <Select defaultValue="" onChange={() => {}}>
        <Option value="hopper">Hopper</Option>
        <Option value="holberton">Holberton</Option>
        <Divider />
        <Option value="antonelli">Antonelli</Option>
        <Option value="bartik">Bartik</Option>
        <Option value="teitelbaum">Teitelbaum</Option>
        <Option value="bartik">Bartik</Option>
      </Select>
    </App>
  );

  expect(getByTestId("select-button")).toHaveAttribute("role");
});
