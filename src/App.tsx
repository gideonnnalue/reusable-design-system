import { ThemeProvider } from "@emotion/react";
import "./App.css";

import { SelectMenu } from "./components";
import theme from "./theme";

const { Select, Option, Divider } = SelectMenu;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="">
        <Select defaultValue="" onChange={() => {}}>
          <Option value="hopper">Hopper</Option>
          <Option value="holberton">Holberton</Option>
          <Divider />
          <Option value="antonelli">Antonelli</Option>
          <Option value="bartik">Bartik</Option>
          <Option value="teitelbaum">Teitelbaum</Option>
          <Option value="bartik">Bartik</Option>
        </Select>
        <Select defaultValue="" onChange={() => {}}>
          <Option value="hopper">Hopper</Option>
          <Option value="holberton">Holberton</Option>
          <Divider />
          <Option value="antonelli">Antonelli</Option>
          <Option value="bartik">Bartik</Option>
          <Option value="teitelbaum">Teitelbaum</Option>
          <Option value="bartik">Bartik</Option>
        </Select>
      </div>
    </ThemeProvider>
  );
}

export default App;
