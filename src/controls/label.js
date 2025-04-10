import styled from "styled-components";

const LabelContainer = styled.div`
    font-weight: 500;
    font-size: 16px;
    padding: 10px 20px;
`
const Label = ({ text }) => {
    return (
        <LabelContainer>
            {text}
        </LabelContainer>
    );
}

export default Label;