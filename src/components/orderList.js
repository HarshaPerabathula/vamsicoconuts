import styled from "styled-components";
import Icons from "../controls/icons";

const OrderListMain = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
`;

const OrderListContainer = styled.div`
    width: 200px;
    height: 200px;
    background-color: #ffffff;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 16px;
    margin: 0px 0 10px 0;
    padding: 15px;
    font-size: 16px;
    top: 20px;
    display: flex;
`;

const OrderListData = styled.div``;
const OrderOptions = styled.div`
    margin-top: 10px;
    gap: 8px;
`;

const OrderList = () => {
    return (
        <OrderListMain>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((val) => {
                return (
                    <OrderListContainer>
                        <OrderListData>
                            <div className="mt-10">Order From: Harsha Corporation</div>
                            <div className="mt-10">
                                Nuts: 90 Bags
                            </div>
                            <div className="mt-10">
                                Address: Dr no: 11-115, Opposite Lic Office, Main Road, Konkapalli, Amalapuram, Konasema District, Andhra Pradesh.
                            </div>
                        </OrderListData>
                        <OrderOptions>
                            <Icons name="eye" /> <Icons name="edit" />
                        </OrderOptions>
                    </OrderListContainer>
                )
            })}
        </OrderListMain>
    );
}

export default OrderList;