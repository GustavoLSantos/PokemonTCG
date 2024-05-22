import React from "react";
import PokemonLogo from '../assets/pokemonLogo.png';
import './Header.styles.scss';

const Header = () => {
    return (
        <div className="LogoContainer">
            <img className="Logo" src={PokemonLogo} alt="Pokemon Logo" />
        </div>
    );
}

export default Header;
