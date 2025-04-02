import styled from "styled-components";

const ButtonContainer = styled.div`
  position: sticky;
  top: 8px;
  .button-style {
    border: none;
    padding: 10px 30px;
    border-radius: 6px;
    margin: 10px;
    color: #ffffff;
    font-weight: 600;
  }
  .button-style:focus {
    outline: 1px solid #69c4ec;
  }
`;

const Button = ({ text, onClick, buttonBackground="#69c4ec", buttonColor="#ffffff" }) => {
  return (
    <ButtonContainer>
      <button
        style={{ backgroundColor: `${buttonBackground}`, color: `${buttonColor}` }}
        className="button-style"
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    </ButtonContainer>
  );
};

export default Button;