import OrderList from "../components/orderList";
import styled from "styled-components";
import Button from "../controls/button";
import { useNavigate } from "react-router-dom";

const OrdersContainer = styled.div`
    margin: 30px 0 0 0;
`;

const ButtonStyles = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Orders = () => {
    const navigate = useNavigate();

    return (
        <OrdersContainer>
            <ButtonStyles>
                <Button text="Create Order" onClick={() => { navigate('/create-order') }} />
            </ButtonStyles>
            <OrderList />
        </OrdersContainer>
    )
}

export default Orders;