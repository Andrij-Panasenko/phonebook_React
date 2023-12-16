import styled from 'styled-components';

import { NavLink as AuthItem } from 'react-router-dom';

export const AuthWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(AuthItem)`
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(4)};
  font-weight: 700;
  border: none;
  box-shadow: ${p => p.theme.colors.boxShadow};
  background-color: #ffd466;
  color: #000000;
  border-radius: 25px;

  transition: ${p => p.theme.tratsition};

  &.active {
    background-color: #4f2ee8;
    color: #ffffff;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
