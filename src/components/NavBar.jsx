import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 30px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="fixed">
      <Toolbar>
        <Tabs to="/">Logo</Tabs>
        <Tabs to="/home">Home</Tabs>
        <Tabs to="/services"> Services</Tabs>
        <Tabs to="/gallery">Gallery</Tabs>
        <Tabs to="/contactus">ContactUs</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
