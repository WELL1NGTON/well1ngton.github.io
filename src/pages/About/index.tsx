import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useTranslation, Trans } from 'react-i18next';

const About: React.FC = () => {
  useTranslation();

  return (
    <>
      <Jumbotron className="m-3">
        <Trans i18nKey={'aboutPage.introduction.greetings'} />
        <h1>
          <Trans i18nKey={'aboutPage.introduction.name'} />
        </h1>
        <Trans i18nKey={'aboutPage.introduction.personalTitle'} />
        <br />
        <br />
        <p>
          <Trans i18nKey={'aboutPage.mainText.part1'} />
        </p>
        <p>
          <Trans i18nKey={'aboutPage.mainText.part2'} />
        </p>
        <p>
          <Trans i18nKey={'aboutPage.mainText.part3'} />
        </p>
      </Jumbotron>
    </>
  );
};

export default About;
