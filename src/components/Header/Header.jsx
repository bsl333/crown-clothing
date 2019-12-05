import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebaseUtils';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectShowCartDropdown } from '../../redux/cart/cartSelectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './Header.style';

function Header({ currentUser, showCartDropdown }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink>SHOP</OptionLink>
        <OptionLink>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCartDropdown && <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCartDropdown: selectShowCartDropdown
});

export default connect(mapStateToProps)(Header);
