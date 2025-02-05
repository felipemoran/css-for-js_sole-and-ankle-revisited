import React from 'react';
import styled from 'styled-components/macro';

import {WEIGHTS, QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <LogoWrapper>
                    <Logo/>
                    <Filler/>
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </DesktopNav>
                <MobileActions>
                    <UnstyledButton>
                        <Icon id={"shopping-bag"}/>
                        <VisuallyHidden>Open cart</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon id={"search"}/>
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id={"menu"}/>
                        <VisuallyHidden>Open menu</VisuallyHidden>
                    </UnstyledButton>
                </MobileActions>
                <Filler/>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Filler = styled.div`
  flex: 1;
  
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  gap: 48px;
  overflow-x: auto;
  
  @media ${QUERIES.tabletAndSmaller} {
      border-top: 4px solid var(--color-gray-900);
      align-items: center;
      gap: 32px;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
      padding-left: 16px;
      padding-right: 16px;
      gap: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.15vw - 4.4rem, 3rem);
  
   @media ${QUERIES.tabletAndSmaller} {
       display: none;
   }
`;

const MobileActions = styled.div`
  display: none;
  
  @media ${QUERIES.tabletAndSmaller} {
      display: flex;
      gap: 34px;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
      gap: 17px;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
