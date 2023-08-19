import React from 'react';
import backgroundVideo from '../assets/background.mp4';
import Typewriter from 'typewriter-effect';
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return (
    <div id="home">
      <div className="back-video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div id="typing">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(t('home.type.line-1'))
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(t('home.type.line-2'))
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(t('home.type.line-3'))
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(t('home.type.line-4'))
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;