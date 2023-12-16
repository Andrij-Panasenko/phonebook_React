import styled from 'styled-components';

import { NavLink as NavigationLink } from 'react-router-dom';

export const Nav = styled.nav`
   display: flex;
   gap: 20px;
`;

export const NavLink = styled(NavigationLink)`
  font-size: 30px;
  text-decoration: none;
  color: #000000;
  font-weight: 600;

  &.active {
    color: #4f2ee8;
  }
`;