import '../css/header.css';
import Menu from '../elements/menu.js';
import Contact from '../elements/contact.js';




function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                <Menu />
                <Contact />

                </div>
            </div>
        </header>
    )
};

export default Header;
