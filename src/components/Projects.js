import React from 'react';
import dlsaudeImage from '../assets/dlsaude.webp';
import swiftbuyImage from '../assets/swiftbuy.png';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="projects" id="projetos">
        <h2 className="titulos">{t('projects.title')}</h2>
        <p className="text popup">{t('projects.description')}</p>
        <div className="projects-content">

            <div className="project-item">
                <div className="project-image">
                    <img src={dlsaudeImage} alt=""/>
                </div>
                <div className="project-description popup">
                    <h3>{t('project.dl.saude')}</h3>
                    <p className="text">{t('project.dl.description')}</p>
                    <div className="project-buttons">
                        <a href="https://dlsaude.netlify.app/" className="visit">{t('project.visit')}</a>
                        <a href="https://github.com/LuccasHenrique13/Lp" className="sourcecode">{t('project.source-code')}</a>
                    </div>
                </div>
            </div>

            <div className="project-item">
                <div className="project-image">
                    <img src={swiftbuyImage} alt=""/>
                </div>
                <div className="project-description popup">
                    <h3>{t('project.swiftbuy')}</h3>
                    <p className="text">{t('project.swiftbuy.description')}</p>
                    <div className="project-buttons">
                        <a href="https://swiftbuycommerce.netlify.app/" className="visit">{t('project.visit')}</a>
                        <a href="https://github.com/LuccasHenrique13/SwiftBuy" className="sourcecode">{t('project.source-code')}</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Projects;
