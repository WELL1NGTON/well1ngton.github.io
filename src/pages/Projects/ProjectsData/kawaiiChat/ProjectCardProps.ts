import { ProjectCardProps } from '../../components/ProjectCard';
import kawaiiChat01 from './images/kawaiiChat01.webp';
import kawaiiChat02 from './images/kawaiiChat02.webp';
import kawaiiChat03 from './images/kawaiiChat03.webp';

const kawaiiChat: ProjectCardProps = {
  title: 'projectsPage.kawaiiChat.title',
  description: ['projectsPage.kawaiiChat.description.part1', 'projectsPage.kawaiiChat.description.part2', 'projectsPage.kawaiiChat.description.part3'],
  links: [
    { href: 'https://play.google.com/store/apps/details?id=com.cmy.kawaiichat', icon: 'Googleplay' },
    { href: 'https://gitlab.com/caiquecorcioli/kawaiichat/', icon: 'Gitlab' },
  ],
  imgs: [kawaiiChat01, kawaiiChat02, kawaiiChat03],
};

export default kawaiiChat;
