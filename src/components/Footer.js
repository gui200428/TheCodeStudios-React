import React from 'react';
import logo from '../assets/logo-white.png';
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="" />
        <p>&copy; {t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
