import React from 'react';
import { Jumbotron, Card, Button, Carousel } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import {
  // Javascript,
  // Java,
  // Typescript,
  // NodeDotJs,
  // C,
  // Cplusplus,
  // Git,
  // Android,
  // Androidstudio,
  // Godotengine,
  // ReactJs,
  // Firebase,
  // Mongodb,
  // Linux,
  Gitlab,
  Googleplay,
} from '@icons-pack/react-simple-icons';

const Projects: React.FC = () => {
  useTranslation();

  return (
    <>
      <Jumbotron className="m-3">
        <Card className="bg-dark text-white" style={{ width: '18rem' }}>
          <Card.Header>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block"
                  height={256}
                  src="https://play-lh.googleusercontent.com/K5TsHOuQHVfA1PHx2Y23yc-IpNgjhrNn1mGHkCm2PsZJk-Y2vadFpDcJSSAbkyHoFw=s360-rw"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block"
                  height={256}
                  src="https://play-lh.googleusercontent.com/9QJOx6HgaFG48cVchbnBGU83YhfDGTLsdI8b7V8Wcr8f45Fd_Uac-yPWq1J1m0QRGIQ=w1440-h620-rw"
                  alt="Third slide"
                />
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  height={256}
                  src="https://play-lh.googleusercontent.com/m0f5581jmi8Yl0xt6ypOpEow5borjVTFvslxpni8hsP_91Lf5NMZ41yknt12RYveKg=w1440-h620-rw"
                  alt="Third slide"
                />
                {/* <Carousel.Caption>
                  <h3 className="text-dark">Third slide label</h3>
                  <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Card.Header>
          {/* <Card.Img
            variant="top"
            src="https://play-lh.googleusercontent.com/K5TsHOuQHVfA1PHx2Y23yc-IpNgjhrNn1mGHkCm2PsZJk-Y2vadFpDcJSSAbkyHoFw=s360-rw"
            alt="KawaiiChat"
          /> */}

          <Card.Body>
            <Card.Title>
              <Trans i18nKey={'projectsPage.kawaiiChat.title'}></Trans>
            </Card.Title>

            <Card.Text>
              <Trans i18nKey={'projectsPage.kawaiiChat.description.part1'}></Trans>
              {/* <Trans i18nKey={'projectsPage.kawaiiChat.description.part2'}></Trans>
              <Trans i18nKey={'projectsPage.kawaiiChat.description.part3'}></Trans> */}
            </Card.Text>
          </Card.Body>

          <Card.Footer className="bg-light text-black">
            <Card.Text>
              {/* <a href="https://play.google.com/store/apps/details?id=com.cmy.kawaiichat" target="_blank">
                <Googleplay color="#414141" />
              </a>{' '}
              <a href="https://gitlab.com/caiquecorcioli/kawaiichat/" target="_blank">
                <Gitlab color="#FCA121" />
              </a> */}
            </Card.Text>
          </Card.Footer>
        </Card>
      </Jumbotron>
    </>
  );
};

export default Projects;
