import React, { FC } from "react";
import { CheckBox } from "../../theme/components";

interface Props {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const Checkbox: FC<Props> = ({ checked, onChange }) => {
  return (
    <CheckBox checked={checked}>
      <input type="checkbox" id="switch" onChange={onChange} />
      <label htmlFor="switch">Toggle</label>
    </CheckBox>
  );
};

export default Checkbox;
