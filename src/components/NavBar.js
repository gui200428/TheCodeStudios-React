import React, {useState, useEffect} from "react";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";

const NavBar = () => {

  // translations (i18n)
  const { t } = useTranslation();

  // change burger className
  const [ClassMenu, setClassMenu] = useState("menu")
  const [isMenuClicked, setIsMenuClicked] = useState(false)


  // menu button (open / close)

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {

    // change the state of the menu (open or close)
    setIsNavOpen(!isNavOpen);

    // open and close menu
    if(!isMenuClicked) {
      setClassMenu("menu show")
      //disable scroll when menu show
      document.body.style.overflow = 'hidden';
    }
    else {
        setClassMenu("menu close")
        //enable scroll when menu close
        document.body.style.overflow = 'unset';
    }
    setIsMenuClicked(!isMenuClicked)

  }

  //close the navbar when click in a link

  const updateMenuItens = () => {
    // change the state of the menu to close
    setClassMenu("menu close")

    // close the menu
    setIsNavOpen(false);
    setIsMenuClicked(false);

    //enable scroll when menu close
    document.body.style.overflow = 'unset';
  }

  // behavior navbar (hide / show) the navbar when scroll down / up

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const shouldShow = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(shouldShow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
      <header className={`navbar ${visible ? '' : 'hidden'}`}>
        <a href="#home">
          <img src={logo} alt="" />
        </a>

        <div id="menu-btn-container" className={isNavOpen ? 'open' : '' } onClick={toggleNav}>
          <div className="menu-btn"></div>
        </div>

        <ul className={ClassMenu}>
          <li><a href="#home" className="menuItem" onClick={updateMenuItens}>{t('navbar.home')}</a></li>
          <li><a href="#sobre" className="menuItem" onClick={updateMenuItens}>{t('navbar.about')}</a></li>
          <li><a href="#projetos" className="menuItem" onClick={updateMenuItens}>{t('navbar.projects')}</a></li>
          <li><a href="#contato" className="menuItem" onClick={updateMenuItens}>{t('navbar.contact')}</a></li>
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
