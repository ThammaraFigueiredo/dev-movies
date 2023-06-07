import { Quadrado, Menu, Li } from "./styles"
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

function Header(){

    return (
        <Quadrado>
          <img  src={Logo} alt="logo-dev-movies"/>
          <Menu>
            <Li>
                <Link to='/'>Home</Link>
            </Li>
            <Li>
                <Link to='/filmes'>Filmes</Link>
            </Li>
            <Li>
                <Link to='/series' >Séries</Link>
            </Li>
          </Menu>

        </Quadrado>)
}

export default Header
