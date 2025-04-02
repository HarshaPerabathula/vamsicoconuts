import styled from "styled-components";
import Button from "../controls/button";
import { useNavigate } from "react-router-dom";
import PurchaseList from "../components/purchaseList";

const PurchaseContainer = styled.div`
    margin: 30px 0 0 0;
`;

const ButtonStyles = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Purchase = () => {
    const navigate = useNavigate();
    return (
        <PurchaseContainer>
            <ButtonStyles>
                <Button text="Create Purchase" onClick={() => { navigate('/create-purchase') }} />
            </ButtonStyles>
            <PurchaseList />
        </PurchaseContainer>
    )
}

export default Purchase;