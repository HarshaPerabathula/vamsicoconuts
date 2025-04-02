import styled from "styled-components";

const TextboxContainer = styled.div`
    position: sticky;
    top: 8px;
    display: grid;
    .input-style {
        padding: 15px 20px;
        box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%),
            0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 6px 16px 0px rgb(0 0 0 / 10%);
        border-radius: 8px;
        margin: 10px;
        font-weight: 700px;
        border: none;
    }
    .input-style:focus {
        outline: 1px solid #b7d1fb;
    }
    .label-style {
        margin: 0 0 -7px 28px;
        font-weight: 700px;
    }
`;

const Textbox = ({ 
    value, 
    type = "text", 
    placeholder = "", 
    onChange, 
    TextLabel="", 
    width="300px" 
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextboxContainer>
        <label className="label-style">{TextLabel}</label>
        <input
            onChange={handleChange}
            value={value}
            className="input-style"
            id="textbox"
            type={type}
            placeholder={placeholder}
            width={width}
        />
    </TextboxContainer>
  );
};

export default Textbox;