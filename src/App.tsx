import { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import { SelectMenu } from "./components";
import theme from "./theme";

const { Select, Option, OptionExtended, Divider } = SelectMenu;

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="">
        <Select defaultValue="" onChange={() => {}}>
          <OptionExtended
            value="hopper"
            desc="Grace Hopper was an American computer scientist and US navy rear admiral"
          >
            Hopper
          </OptionExtended>
          <OptionExtended
            value="holderton"
            desc="Frances Elizabeth Holberton was one of the programmers of the first computer"
          >
            Holberton
          </OptionExtended>
          <Divider />
          <OptionExtended
            value="teitelbaum"
            desc="Ruth Teitelbaum Hopper was one of the first computer programmers of the world"
          >
            Teitelbaum
          </OptionExtended>
        </Select>

        {/* <div>
          <Select defaultValue="" onChange={() => {}}>
            <Option value="hopper">
              Hopperjdjjjdjdjdjdjjdjddjjddjdpspoopdsopdosdsklsldklskldlksldksldkjjdjjj
            </Option>
            <Option value="holberton">Holberton</Option>
            <Divider />
            <Option value="antonelli">Antonelli</Option>
            <Option value="bartik">Bartik</Option>
            <Option value="teitelbaum">Teitelbaum</Option>
            <Option value="bartik">Bartik</Option>
          </Select>
        </div> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
