import React from "react";
import smallLeft from '../../Assets/icons/small-left.png';
import smallRight from '../../Assets/icons/small-right.png';
import search from '../../Assets/icons/search.png';
import './Header.css';

const Header = ({ searchInput, onSearchChange }) => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
                <div className="header__search">
                    <img src={search} alt="Search" />
                    <input type="text" id="search-input" maxlength="800" placeholder="Texto aqui" value={searchInput} onChange={onSearchChange} />
                </div>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Login-se</button>
            </div>
        </nav>

    )
}

export default Header;