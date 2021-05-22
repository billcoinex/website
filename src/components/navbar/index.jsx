import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import {theme } from "../../theme";

const NavbarContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.secondary};;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2em;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: ${theme.primary};

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <LoginButton small>Login</LoginButton>
        <Marginer direction="horizontal" margin="8px" />
        <Button small>Get Started</Button>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
