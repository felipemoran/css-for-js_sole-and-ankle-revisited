/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content>
                <CloseButton onClick={onDismiss}>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    <Icon id={"close"}/>
                </CloseButton>
                <Filler/>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Footer>
                    <FooterLink href="/terms">Terms and Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </Footer>
            </Content>
        </Overlay>
    );
};


const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-backdrop);
  //height: 100%;
`

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: min(300px, 100%);
  margin-left: auto;
  gap: 32px;
  overflow-y: auto;
  
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 12px;
    right: 16px;
    padding: 16px;
    color: var(--color-gray-900);
    
    @media ${QUERIES.phoneAndSmaller} {
      right: 0;
    }
`

const Filler = styled.div`
    flex: 1
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 22px;
`

const NavLink = styled.a`
  text-decoration: none;
  font-family: Raleway;
  font-style: normal;
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;;
  color: var(--color-gray-900);
  text-transform: uppercase;
    
  :first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`

const FooterLink = styled.a`
  text-decoration: none;
  font-family: Raleway;
  font-style: normal;
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
    
  color: var(--color-gray-700);
`


export default MobileMenu;

