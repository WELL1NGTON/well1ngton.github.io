import React, { FC, SVGAttributes } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Card, Image, Carousel } from 'react-bootstrap';
import { Gitlab, Googleplay, Github } from '@icons-pack/react-simple-icons';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type CardLink = {
  href: string;
  icon: string;
};

export type ProjectCardProps = {
  title: string;
  description: string[];
  imgs: string[];
  links: CardLink[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, links, imgs }) => {
  useTranslation();

  const cardLinks: Map<string, React.ReactElement> = new Map([
    ['Googleplay', <Googleplay color="#414141" />],
    ['Gitlab', <Gitlab color="#FCA121" />],
    ['Github', <Github color="#181717" />],
  ]);

  return (
    <Card className="bg-dark text-white">
      <Card.Header>
        <Carousel>
          {imgs.map((img, index) => {
            return (
              <Carousel.Item interval={1000}>
                <div className="d-flex justify-content-center">
                  <Image key={`${index}_${img}`} height="300" width="auto" src={img} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Card.Header>

      <Card.Body>
        <Card.Title>
          <Trans i18nKey={title} />
        </Card.Title>

        {description.map((desc, index) => {
          return (
            <Card.Text key={`${index}_${desc}`}>
              <Trans i18nKey={desc} />
            </Card.Text>
          );
        })}
      </Card.Body>

      <Card.Footer className="bg-light text-black">
        <Card.Text className="text-dark">
          {'Links: '}
          {links.map((link, index) => {
            return (
              <>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {cardLinks.has(link.icon) ? cardLinks.get(link.icon) : <>{link.icon}</>}
                </a>{' '}
              </>
            );
          })}
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
