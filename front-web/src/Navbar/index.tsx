import './styles.css';

import { ReactComponent as Logo } from './Logotipo.svg';

function NavBar(){
    return (
        <nav className="main-navBar">
            <Logo/>
            <a href="." className="logo-text">DS Deliver</a>
        </nav>
    )
}

export default NavBar;