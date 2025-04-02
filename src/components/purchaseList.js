import styled from "styled-components";
import Icons from "../controls/icons";

const PurchaseListContainer = styled.div`
    position: sticky;
    background-color: #ffffff;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%),
    0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 16px;
    margin: 0px 0 10px 0;
    padding: 15px;
    font-size: 16px;
    top: 20px;
    display: flex;
    justify-content: space-between;
`;

const PurchaseListData = styled.div``;
const PurchaseOptions = styled.div`
    width: 100px;
    margin-top: 10px;
    display: flex;
    gap: 8px;
`;

const PurchaseList = () => {
    return (
        <div>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((val) => {
                return (
                    <PurchaseListContainer>
                        <PurchaseListData>
                            <div className="mt-10">Purchase From: Srinivas Corporation</div>
                            <div className="mt-10">
                                Nuts: 90 Bags
                            </div>
                            <div className="mt-10">
                                Address: Dr no: 11-115, Opposite Lic Office, Main Road, Konkapalli, Amalapuram, Konasema District, Andhra Pradesh, Opposite Lic Office, Main Road, Konkapalli, Amalapuram, Konasema District, Andhra Pradesh.
                            </div>
                        </PurchaseListData>
                        <PurchaseOptions>
                            <Icons name="eye" /> <Icons name="edit" />
                        </PurchaseOptions>
                    </PurchaseListContainer>
                )
            })}
        </div>
    );
}

export default PurchaseList;