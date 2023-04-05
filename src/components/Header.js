import React from 'react';
import {Link} from 'react-router-dom';
import TBATLogo from './TBATLogo';
import './Header.css';
import {FaShoppingCart} from 'react-icons/fa';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <TBATLogo/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/cart">
                            <FaShoppingCart/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
