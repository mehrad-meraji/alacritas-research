import React, {useState} from 'react';
import styled from 'styled-components';
import {variables} from '../styles/global-style-variables';
import Link from 'next/link'
import {Head} from "next/document";

const NavigationContainer = styled.nav`
  position: absolute;
  top: 46px;
  left: 6px;
  width: 182px;
  border: 1px solid #423100;
  background: white;
  box-shadow: 0 4px 8px 1px rgba(66, 49, 0, 0.17);
`
const NavigationListContainer = styled.ul`
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    &:not(:last-child) {
      border-bottom: 1px solid #423100;
    }
  }
`
const NavigationItem = styled.a`
  display: block;
  font-size: 18px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background: #665602;
    color: white;
  }
`
const Container = styled.header`
  margin: 0 auto;
  max-width: ${variables.siteWidth};
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 20px 0;
`
const NavButton = styled.span`
  width: 36px;
  height: 6px;
  background-color: #655602;
  display: block;
  position: ${props => !props.active ? "relative" : "absolute"};
  transform: rotate(${props => !props.active ? "0" : "45deg"});
  &:not(:last-child) {
    transform: rotate(${props => !props.active ? "0" : "-45deg"});
    margin-bottom: ${props => !props.active ? "6px" : "0"};
  }
`
const Button = styled.button`
  padding: 6px;
  width: 48px;
  height: 42px;
  position: relative;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
const Logo = styled.img`
  width: 229px;
  height: 60px;
  cursor: pointer;
`
const PreHeader = styled.div`
  font-style: italic;
  line-height: 2.29;
  letter-spacing: 2.73px;
  font-size: 16px;
  text-align: center;
  padding-top: 20px;
`
const HeaderLeftContainer = styled.div`
  position: relative;
  display: flex;
  p {
    margin: 0 10px;
    font-size: 18px;
  }
`
function Header(props) {
  const [navState, setNavState] = useState(false);
  function toggleNavDrawer() {
    setNavState(!navState)
  }
  return (
    <>
      {
        !props.isLanding ?
        <PreHeader>Independent Multi-Disciplinary Analysis of the Global Energy Sector</PreHeader> :
        null
      }
      <Container>
        <HeaderLeftContainer>
          <Button onClick={toggleNavDrawer}>
            <NavButton active={navState}/>
            { !navState ? <NavButton /> : null}
            <NavButton active={navState}/>
          </Button>
          {
            navState ?
              <NavigationContainer>
                <NavigationListContainer>
                  <li onClick={toggleNavDrawer}>
                    <Link href={"/mandate"}>
                      <NavigationItem>Mandate</NavigationItem>
                    </Link>
                  </li>
                  <li onClick={toggleNavDrawer}>
                    <Link href={"/bio"}>
                      <NavigationItem>Bio</NavigationItem>
                    </Link>
                  </li>
                  <li onClick={toggleNavDrawer}>
                    <Link href={"/contact"}>
                      <NavigationItem>Contact</NavigationItem>
                    </Link>
                  </li>
                </NavigationListContainer>
              </NavigationContainer> :
              null
          }
          {
            !props.isLanding ?
            <p>Howard Schipper B.A. M.A. Cantab</p> :
            null
          }
        </HeaderLeftContainer>
        {
          !props.isLanding ?
            <>
              <Link href={"/"}>
                <Logo src={'header-logo.png'} srcSet={'header-logo.png 1x, header-logo@2x.png 2x, header-logo@3x.png 3x'}
                      alt={"Alacritas Research logo"}/>
              </Link>
            </> :
            null
        }
      </Container>
    </>
  );
}

export default Header;
