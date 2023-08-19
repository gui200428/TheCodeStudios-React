import React, {useState} from "react";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  // change burger class
  const [ClassMenu, setClassMenu] = useState("menu")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // change menu class
  const updateMenu = () => {
      if(!isMenuClicked) {
          setClassMenu("menu show")
      }
      else {
          setClassMenu("menu")
      }
      setIsMenuClicked(!isMenuClicked)
  }
  

  return (
    <header className="navbar">
        <a href="#home">
          <img src={logo} alt="" />
        </a>
        <div className="menu-icon">
          <input id="checkbox2" type="checkbox" />
          <label className="toggle toggle2" htmlFor="checkbox2" onClick={updateMenu}>
            <div id="bar4" className="bars"></div>
            <div id="bar5" className="bars"></div>
            <div id="bar6" className="bars"></div>
          </label>
        </div>
        <ul className={ClassMenu}>
          <li><a href="#home">{t('navbar.home')}</a></li>
          <li><a href="#sobre">{t('navbar.about')}</a></li>
          <li><a href="#projetos">{t('navbar.projects')}</a></li>
          <li><a href="#contato">{t('navbar.contact')}</a></li>
          <li className="spotify-link">
            <a href="https://open.spotify.com/playlist/6duYMPpJArrAJIHEV5GeAh" className="spotify">
            <FontAwesomeIcon icon={faSpotify} id="spotify" /> {t('navbar.spotify')}
            </a>
          </li>
        </ul>
    </header>
  );
};

export default NavBar;
