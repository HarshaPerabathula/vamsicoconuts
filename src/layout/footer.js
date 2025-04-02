import React, { useState } from "react";
import styled from "styled-components";
import Icons from "../controls/icons";
import { useNavigate } from "react-router-dom";

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    padding: 10px 50px;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`;

const Footer = () => {
    const navigate = useNavigate()
    return (
        <FooterContainer>
            <div onClick={() => {navigate('/orders')}}>
                <Icons name="list" />
            </div>
            <div onClick={() => {navigate('/purchase')}}>
                <Icons name="shopping-bag" />
            </div>
            <div onClick={() => {navigate('/sale')}}>
                <Icons name="slack" />
            </div>
            <div onClick={() => {navigate('/settings')}}>
                <Icons name="settings" />
            </div>
        </FooterContainer>
    );
}

export default Footer;