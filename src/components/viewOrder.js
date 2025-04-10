import { useMemo, useState } from "react";
import styled from "styled-components";
import Icons from "../controls/icons";
import { useNavigate } from "react-router-dom";
import Button from "../controls/button";

const ViewOrderMain = styled.div`
    margin: 30px 0 10px 0;
    background-color: #ffffff;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%),
        0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 16px;
    padding: 15px;
    font-size: 16px;

    @media (max-width: 700px) {
        .mobile-screen-tables {
            display: "";
        }
        .desktop-screen-tables {
            display: none;
        }
    }

    @media (min-width: 700px) {
        .mobile-screen-tables {
            display: none;
        }
        .desktop-screen-tables {
            display: "";
        }
    }
`;

const TabularForm = styled.div`
    margin: 20px 0 0 0;

    @media (max-width: 768px) {
        display: flex;

        .table-data {
            border-collapse: collapse;
        }

        .table-cells {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        .flexing {
            display: flex;
        }
    }

    @media (min-width: 769px) {
        .table-data {
            display: flex;
            justify-content: space-between;
            border: 1px solid #dddddd;
            padding: 8px;
            border-collapse: collapse;
        }
    }  
`;

const TableStyles = styled.div`
    margin: 20px 0 0 0;

    .grand-total {
        text-align: right;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
`;

const ButtonStyles = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

const ViewOrder = () => {
    const [quantity, setQuantity] = useState([
        { quality: 100, bags: 30, nuts: 22, rupees: 13 },
        { quality: 100, bags: 10, nuts: 22, rupees: 16 },
        { quality: 50, bags: 10, nuts: 22, rupees: 11 },
        { quality: 150, bags: 93, nuts: 22, rupees: 18 },
        { quality: 50, bags: 10, nuts: 22, rupees: 12 }
    ]);

    const {orderDetailsList, grandTotal} = useMemo(() => {
        const orderDetailsList = quantity.map((qty) => {
            const totalnuts = parseInt(qty.quality) * parseInt(qty.bags);
            const nutsPercentage = 1000 / 23;
            const deminishingPercentage = totalnuts / nutsPercentage.toFixed(4);

            const deminishing = deminishingPercentage.toFixed(1);
            const nutsAfterDeminishing = totalnuts - deminishing;
            const priceAfteDeminishing = nutsAfterDeminishing * parseInt(qty.rupees);
            
            const service = (priceAfteDeminishing) / 100;
            const priceAfterService = priceAfteDeminishing - service;
            
            const qualityCheck = totalnuts / 100 * 7;
            const finalPrice = priceAfterService - qualityCheck;

            return { 
                quality: qty.quality, 
                totalnuts, 
                deminishing, 
                rupees: qty.rupees,
                service: service.toFixed(2),
                qualityCheck,
                finalPrice: finalPrice.toFixed(0)
            }
        });
        const grandTotal = orderDetailsList.reduce(
            (accumulator, currentValue) => accumulator + parseFloat(currentValue.finalPrice), 0
        );
        return {orderDetailsList, grandTotal};
    }, [quantity]);

    const navigate = useNavigate();

    return (
        <ViewOrderMain>
            <div onClick={() => {navigate('/orders')}}><Icons name="arrow-left" /></div>
            <div className="mt-10">
                <span className="fw-700">Order From: </span> 
                Harsha Corporation
            </div>
            <div className="mt-10">
                <span className="fw-700">Nuts: </span>
                90 Bags
            </div>
            <div className="mt-10">
                <span className="fw-700">Address: </span> 
                Dr no: 11-115, Opposite Lic Office, Main Road, Konkapalli, Amalapuram, Konasema District, Andhra Pradesh.
            </div>

            <div className="mobile-screen-tables">
                <TabularForm>
                    <div className="table-data">
                        <div className="table-cells">Quality</div>
                        <div className="table-cells">Bags</div>
                        <div className="table-cells">Nuts</div>
                        <div className="table-cells">Rupees</div>
                    </div>
                    <div className="flexing">
                        {quantity.length > 0 && quantity.map((q) => {
                            return (
                                <div className="table-data">
                                    <div className="table-cells">{q.quality}</div>
                                    <div className="table-cells">{q.bags}</div>
                                    <div className="table-cells">{q.nuts}</div>
                                    <div className="table-cells">{q.rupees}</div>
                                </div>
                            )
                        })}
                    </div>
                </TabularForm>

                <TabularForm>
                    <div className="table-data">
                        <div className="table-cells">Quality</div>
                        <div className="table-cells">Total Nuts</div>
                        <div className="table-cells">Diminishing</div>
                        <div className="table-cells">Rupees</div>
                        <div className="table-cells">Service</div>
                        <div className="table-cells">QC</div>
                        <div className="table-cells">Final</div>
                    </div>
                    <div className="flexing">
                        {orderDetailsList.length > 0 && orderDetailsList.map((qnt) => {
                            return (
                                <div className="table-data">
                                    <div className="table-cells">{qnt.quality}</div>
                                    <div className="table-cells">{qnt.totalnuts}</div>
                                    <div className="table-cells">{qnt.deminishing}</div>
                                    <div className="table-cells">{qnt.rupees}</div>
                                    <div className="table-cells">{qnt.service}</div>
                                    <div className="table-cells">{qnt.qualityCheck}</div>
                                    <div className="table-cells">{qnt.finalPrice}</div>
                                </div>
                            )
                        })}
                    </div>
                </TabularForm>
            </div>

            <div className="desktop-screen-tables">
                <TableStyles>
                    {quantity.length > 0 && <table>
                        <tr>
                            <th>Quality</th>
                            <th>Bags</th>
                            <th>Nuts</th>
                            <th>Rupees</th>
                        </tr>
                        {quantity.map((q) => {
                            return (
                                <tr>
                                    <td>{q.quality}</td>
                                    <td>{q.bags}</td>
                                    <td>{q.nuts}</td>
                                    <td>{q.rupees}</td>
                                </tr>
                            )
                        })}
                    </table>}
                </TableStyles>

                <TableStyles>
                    {orderDetailsList.length > 0 && <table style={{ width: '100%' }}>
                        <tr>
                            <th>Quality</th>
                            <th>Total Nuts</th>
                            <th>Diminishing (Nuts)</th>
                            <th>Rupees</th>
                            <th>Service (₹1%)</th>
                            <th>Quality Check</th>
                            <th>Final</th>
                        </tr>
                        {orderDetailsList.map((qnt) => {
                            return (
                                <tr>
                                    <td>{qnt.quality}</td>
                                    <td>{qnt.totalnuts}</td>
                                    <td>{qnt.deminishing}</td>
                                    <td>{qnt.rupees}</td>
                                    <td>{qnt.service}</td>
                                    <td>{qnt.qualityCheck}</td>
                                    <td>{qnt.finalPrice}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td className="fw-700 grand-total" colspan="6">Grand Total</td>
                            <td className="fw-700">{grandTotal}</td>
                        </tr>
                    </table>}
                </TableStyles>
            </div>

            <ButtonStyles>
                <Button
                    text="Back" 
                    buttonBackground="#ffffff" 
                    buttonColor="#69c4ec"
                    onClick={() => {navigate('/orders')}}
                />
                <Button text="Edit Order" onClick={() => {navigate('/orders')}} />
            </ButtonStyles>
        </ViewOrderMain>
    );
}

export default ViewOrder;