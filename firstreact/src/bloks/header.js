import '../css/header.css';
import Menu from '../elements/menu.js'




function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                <Menu />

                </div>
            </div>
        </header>
    )
};

export default Header;
