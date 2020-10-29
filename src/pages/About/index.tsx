import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron className="m-3">
        {t('aboutPage.introduction.greetings')}
        <h1>{t('aboutPage.introduction.name')}</h1>
        {t('aboutPage.introduction.personalTitle')}
        <br />
        <br />
        <p>{t('aboutPage.mainText.part1')}</p>
        <p>{t('aboutPage.mainText.part2')}</p>
        <p>{t('aboutPage.mainText.part3')}</p>
      </Jumbotron>
    </>
  );
};

export default About;
