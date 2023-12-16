import styled from 'styled-components';

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin: 0;

  & > span {
    color: #4f2ee8;
  }
`;

export const Button = styled.button`
  display: block;
  text-transform: uppercase;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(4)};
  font-weight: 700;
  border: none;
  box-shadow: ${p => p.theme.colors.boxShadow};
  background-color: #4f2ee8;
  color: #ffffff;
  border-radius: 25px;

  transition: ${p => p.theme.tratsition};

  &:hover {
    transform: scale(1.05);
  }
`;
