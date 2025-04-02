import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icons from "../controls/icons";

const LeftNavContainer = styled.div`
  position: sticky;
  top: 8px;
`;

const LeftNav = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nav-options {
    padding: 10px;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%),
      0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 8px;
    width: 80%;
    margin: 10px;
    font-weight: 600px;
    text-decoration: none;
    color: #4f5d75;
  }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 5px
`;

const NavName = styled.div`
    margin-top: 3px;
`;

const BannerImage = () => {
  const bannerStyle = {
    width: "80%",
    margin: "20px 0 20px 0",
  };
  return (
    <img
      src=""
      alt="company-logo"
      style={bannerStyle}
    />
  );
};

const LeftNavbar = () => {
    const [navOptions] = useState([
        { id: 1, name: "Orders", icon: "list" },
        { id: 2, name: "Purchase", icon: "shopping-bag" },
        { id: 3, name: "Sale", icon: "slack" },
        { id: 4, name: "Settings", icon: "settings" }
    ])
  return (
    <LeftNavContainer>
      <LeftNav>
        <BannerImage></BannerImage>
        {navOptions.map((nav) => (
          <Link
            className="nav-options"
            key={nav.name.toLowerCase()}
            to={nav.name.toLowerCase()}
          >
            <NavLinks>
                <Icons name={nav.icon} />
                <NavName>{nav.name}</NavName>
            </NavLinks>
          </Link>
        ))}
      </LeftNav>
    </LeftNavContainer>
  );
};

export default LeftNavbar;