import styled from "styled-components";
import Textbox from "../controls/textbox";
import { useMemo, useState } from "react";
import Button from "../controls/button";
import { Outlet, useNavigate } from "react-router-dom";
import Icons from "../controls/icons";

const OrderListContainer = styled.div`
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

const AddMoreStyles = styled.div`
    display: flex;
    justify-content: flex-end;
    .icon-addmore {
        color: #69c4ec;
        display: flex;
        gap: 2px;
        border: 1px solid #69c4ec;
        padding: 0 4px;
        border-radius: 16px;
        font-size: 10px;
    }
    .addmore {
        margin-top: 5px;
        color: #69c4ec;
    }
`;

const QuantityStyles = styled.div`
    padding: 10px 20px;
    .quantityIcons {
        display: flex;
        gap: 3px;
    }
`;

const QuantityLabels = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .labels {
        font-size: 12px;
        font-weight: 700;
    }
    @media (max-width: 768px) {
        width: 300px;
    }
    @media (min-width: 769px) {
        width: 500px;
    }
`;

const QuantityInputs = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    .input-tags:focus {
        outline: 1px solid #b7d1fb;
    }
    @media (max-width: 768px) {
        width: 300px;
        .input-tags {
            width: 30px;
        }
    }
    @media (min-width: 769px) {
        width: 500px;
        .input-tags {
            width: 60px;
        }
    }
`;

const ButtonStyles = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const CreateOrder = () => {
    const [orderName, setOrderName] = useState("");
    const [bagsOrdered, setBagsOrdered] = useState("");
    const [address, setAddress] = useState("");
    const [quantity, setQuantity] = useState([
        { quality: '', bags: '', nuts: '', rupees: '' }
    ]);
    const navigate = useNavigate();

    const handleAddMore = (e) => {
        e.preventDefault();
        console.log('handle add more clicked')
        const addAnotherValue = { quality: '', bags: '', nuts: '', rupees: '' };
        setQuantity([ ...quantity, addAnotherValue ]);
    }

    const handleQuantityInput = (value, input, q, i) => {
        const newSet = [...quantity];
        newSet[i][input] = value;
        setQuantity([ ...newSet ]);
    }

    const handleDelete = (i) => {
        const newSet = [...quantity];
        newSet.splice(i, 1);
        setQuantity([ ...newSet ]);
    }

    return (
        <OrderListContainer>
            <Textbox 
                TextLabel="Ordered Company Name" 
                placeholder="Ordered Company Name" 
                value={orderName} 
                onChange={(e) => {setOrderName(e)}} 
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
            <QuantityStyles>
                <label>Quantity</label>
                <QuantityLabels>
                    <div className="labels">Quality</div>
                    <div className="labels">Bags</div>
                    <div className="labels">Nuts</div>
                    <div className="labels">Rupees</div>
                </QuantityLabels>
                {quantity.length > 0 && quantity.map((q, i) => {
                    return (
                        <div className="quantityIcons">
                            <QuantityInputs>
                                <input 
                                    className="input-tags" 
                                    id="quality"
                                    value={q.quality}
                                    onChange={(e) => { handleQuantityInput(e.target.value, 'quality', q, i) }}
                                />
                                <input 
                                    className="input-tags" 
                                    id="bags"
                                    value={q.bags}
                                    onChange={(e) => { handleQuantityInput(e.target.value, 'bags', q, i) }}
                                />
                                <input 
                                    className="input-tags" 
                                    id="nuts" 
                                    value={q.nuts}
                                    onChange={(e) => { handleQuantityInput(e.target.value, 'nuts', q, i) }}
                                />
                                <input 
                                    className="input-tags" 
                                    id="rupees"
                                    value={q.rupees}
                                    onChange={(e) => { handleQuantityInput(e.target.value, 'rupees', q, i) }}
                                />
                            </QuantityInputs>
                            {i > 0 && <span onClick={() => {handleDelete(i)}}><Icons name="trash-2" /></span>}
                        </div>
                    )
                })}
            </QuantityStyles>
            <AddMoreStyles>
                <div className="icon-addmore">
                    <Icons name="plus" width="15" color="#69c4ec" /> 
                    <span onClick={(e) => {handleAddMore(e)}} className="addmore">add more</span>
                </div>
            </AddMoreStyles>
            <ButtonStyles>
                <Button 
                    text="Back" 
                    buttonBackground="#ffffff" 
                    buttonColor="#69c4ec"
                    onClick={() => {navigate('/orders')}}
                />
                <Button text="Save" onClick={() => {navigate('/orders')}} />
            </ButtonStyles>
            
        </OrderListContainer>
    );
}

export default CreateOrder;