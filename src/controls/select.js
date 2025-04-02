import styled from "styled-components";
import { useState } from "react";

const SelectContainer = styled.div`
  position: sticky;
  top: 8px;
`;

const Select = ({ value, onChange }) => {
  const [input, setInput] = useState(value);

  const handleChange = (e) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };

  return (
    <SelectContainer>
      <textarea
        onChange={handleChange}
        value={input}
        className="input-style"
        id="textbox"
        type="text"
        placeholder="placeholder"
      />
    </SelectContainer>
  );
};

export default Select;