import React from "react";
import styled from "styled-components";
import Icons from "../controls/icons";

const Navbar = styled.div`
  background-color: #ffffff;
  padding: 15px 50px;
  box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%),
    0px 6px 16px 0px rgb(0 0 0 / 10%);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  position: sticky;
  top: 20px;
  z-index: 9;
`;

const NavbarHeading = styled.div`
    font-weight: 600;
`;

const NavbarIcons = styled.div`
    display: flex;
    gap: 20px;
`;

const TopNavbar = () => {
  return ( 
    <Navbar>
        <div></div>
        <NavbarHeading>Vamsi Coconuts...</NavbarHeading>
        <NavbarIcons>
            <Icons name="user" />
            <Icons name="log-out" />
        </NavbarIcons>
    </Navbar>
  );
};

export default TopNavbar;