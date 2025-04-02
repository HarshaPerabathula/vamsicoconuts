import styled from "styled-components";
import Textbox from "../controls/textbox";
import { useState } from "react";
import Button from "../controls/button";
import { useNavigate } from "react-router-dom";

const PurchaseListContainer = styled.div`
    margin: 30px 0 10px 0;
    background-color: #ffffff;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%),
        0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 16px;
    padding: 15px;
    font-size: 16px;
    top: 20px;
    display: grid;
`;

const InputTextStyles = styled.div`
    display: flex;
    width: 100%;
`;

const ButtonStyles = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const CreatePurchase = () => {
    const [purchaseName, setPurchaseName] = useState("");
    const [bagsOrdered, setBagsOrdered] = useState("")
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    return (
        <PurchaseListContainer>
            <Textbox 
                TextLabel="Purchased Company Name" 
                placeholder="Purchased Company Name" 
                value={purchaseName} 
                onChange={(e) => {setPurchaseName(e)}} 
            />
            <Textbox 
                TextLabel="Bags Ordered" 
                placeholder="Bags Ordered" 
                value={bagsOrdered} 
                onChange={(e) => {setBagsOrdered(e)}} 
            />
            <Textbox 
                TextLabel="Address" 
                placeholder="Address" 
                value={address} 
                onChange={(e) => {setAddress(e)}} 
            />
            <ButtonStyles>
                <Button 
                    text="Back" 
                    buttonBackground="#ffffff" 
                    buttonColor="#69c4ec"
                    onClick={() => {navigate('/orders')}}
                />
                <Button text="Save" onClick={() => {navigate('/orders')}} />
            </ButtonStyles>
        </PurchaseListContainer>
    );
}

export default CreatePurchase;