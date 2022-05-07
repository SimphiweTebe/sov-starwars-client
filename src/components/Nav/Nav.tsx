import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    position: relative;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: space-between;

    img{
        width: 100%;
        max-width: 100px;
        display: block;
    }
`;

const Header = ()=> {
  return (
    <header className='container'>
        <StyledNav>
          <Link to="/">
            <img src={require('../../assets/logo/logo_gold.png')} alt="Main logo" />
          </Link>
        </StyledNav>
    </header>
  )
}

export default Header