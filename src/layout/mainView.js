import React from "react";
import TopNavbar from "./topNavbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Purchase from "../pages/purchase";
import Sale from "../pages/sale";
import Orders from "../pages/orders";
import CreateOrder from "../components/createOrder";
import CreatePurchase from "../components/createPurchase";
import Footer from "./footer";

const MainViewDesign = styled.div`
    @media (max-width: 768px) {
        .footer-styles {
            display: "";
        }
    }
    @media (min-width: 769px) {
        .footer-styles {
            display: none;
        }
    }
`;

const MainViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  margin: 2px;
  flex-grow: 1;
`;

const MainView = () => {
  return (
    <MainViewDesign>
        <MainViewContainer>
            <Main>
                <TopNavbar></TopNavbar>
                <Routes>
                    <Route path="/" element={<Orders />}></Route>
                    <Route path="/orders" element={<Orders />}></Route>
                    <Route path="/purchase" element={<Purchase />}></Route>
                    <Route path="/sale" element={<Sale />}></Route>
                    <Route path="/settings" element={<p>Settings</p>}></Route>
                    <Route path="/create-order" element={<CreateOrder />}></Route>
                    <Route path="/create-purchase" element={<CreatePurchase />}></Route>
                </Routes>
                {/* <div className="footer-styles"><Footer /></div> */}
                <Footer />
            </Main>
        </MainViewContainer>
        {/* <div className="footer-styles">
            <Footer />
        </div> */}
    </MainViewDesign>
  );
};

export default MainView;