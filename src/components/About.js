import React from 'react';
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="sobre">
        <div>
            <h2 className="titulos">{t('about.title')}</h2>
            <p className="text popup">{t('about.description')}</p>
        </div>

        <div className="stack">
            <h2 className="titulos">{t('stack.title')}</h2>
            <div className="skills">
                <ul>

                    <li className="popup">HTML</li>
                    <li className="popup">CSS</li>
                    <li className="popup">JavaScript</li>
                    <li className="popup">BootStrap</li>
                    <li className="popup">TailWind</li>
                    <li className="popup">PHP</li>
                    <li className="popup">MySql</li>
                    <li className="popup">Firebase</li>
                    <li className="popup">Azure</li>
                    <li className="popup">Git</li>
                    <li className="popup">GiHub</li>

                </ul>
            </div>
        </div>

    </div>
  );
};

export default About;
