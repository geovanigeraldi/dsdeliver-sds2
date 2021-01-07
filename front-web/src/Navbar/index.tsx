import './styles.css';

import { ReactComponent as Logo } from './Logotipo.svg';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="main-navBar">
            <Logo/>
            <Link to="/" className="logo-text">DS Deliver</Link>
        </nav>
    )
}

export default NavBar;