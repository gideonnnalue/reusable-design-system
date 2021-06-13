## React Select Menu

Simple Select Menu for React applications

## Usage

This is a basic usage of my react select menu. Please note; this component hasn't been published to **NPM** registry yet and as such you have to place the component inside the App.tsx file so it has the theme style and you could switch theme to see the difference.

### Basic usage

    import { SelectMenu, Checkbox } from  "./components";
    const { Select, Option, OptionExtended, Divider } = SelectMenu;

    const  onInputChange = (value: string) => {
    	console.log(value);
    };

    <Select defaultValue="" onChange={onInputChange}>
    	<Option  value="hopper">Hopper</Option>
    	<Option  value="holberton">Holberton</Option>
    	<Divider  />
    	<Option  value="antonelli">Antonelli</Option>
    	<Option  value="bartik">Bartik</Option>
    	<Option  value="teitelbaum">Teitelbaum</Option>
    </Select>

## API

### Select Props

    <Select defaultValue="" onChange={onInputChange}></Select>

| PROPERTY     | DESCRIPTION                                               | type              |
| ------------ | --------------------------------------------------------- | ----------------- |
| defaultValue | Initial selected option                                   | `string | number` |
| onChange     | Called when an option is selected                         | `function(value)` |
| children     | Options placed inside the select component to be rendered | `ReactNode`       |

### Option Props

    <Option  value="hopper">Hopper</Option>

| PROPERTY | DESCRIPTION                                            | type              |
| -------- | ------------------------------------------------------ | ----------------- |
| value    | Option Identifier, must be unique                      | `string | number` |
| children | Text placed inside the Option component to be rendered | `ReactNode`       |

### ExtendedOption Props

This is an extended option component which could be used if there were more description about an option

    <OptionExtended  value="hopper">Hopper</OptionExtended>

| PROPERTY | DESCRIPTION                                            | type              |
| -------- | ------------------------------------------------------ | ----------------- |
| value    | Option Identifier, must be unique                      | `string | number` |
| desc     | Description text for additional information            | `string`          |
| children | Text placed inside the Option component to be rendered | `ReactNode`       |

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
