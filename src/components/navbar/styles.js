// styled components
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export const NavBarStyled = styled.div`
  h2 {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
  width: 100%;
  padding: 1rem;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItem = styled(Link)`
  color: #000;
  text-decoration: none;
`;
