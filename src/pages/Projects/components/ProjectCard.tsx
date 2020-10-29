import React from 'react';
import { Jumbotron, Card, Button, Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
  Googleplay,
} from '@icons-pack/react-simple-icons';

type ProjectCardProps = {
  title: string;
  description: string;
  links: string[];
  imgs: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src="/logo192.png" alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="/logo192.png" alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/logo192.png" alt="Third slide" />
            <Carousel.Caption>
              <h3 className="text-dark">Third slide label</h3>
              <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Header>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          <a href="">
            <Googleplay color="#414141" />
          </a>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
