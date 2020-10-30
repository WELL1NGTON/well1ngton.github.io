import abyssalDive01 from './images/abyssalDive01.webp';
import abyssalDive02 from './images/abyssalDive02.webp';
import abyssalDive03 from './images/abyssalDive03.webp';
import abyssalDive04 from './images/abyssalDive04.webp';
import { ProjectCardProps } from '../../components/ProjectCard';

const abyssalDive: ProjectCardProps = {
  title: 'projectsPage.abyssalDive.title',
  description: ['projectsPage.abyssalDive.description.part1', 'projectsPage.abyssalDive.description.part2'],
  links: [
    { href: 'https://play.google.com/store/apps/details?id=com.cmy.abyssaldive', icon: 'Googleplay' },
    { href: 'https://gitlab.com/WELL1NGTON/submarine-game', icon: 'Gitlab' },
  ],
  imgs: [abyssalDive01, abyssalDive02, abyssalDive03, abyssalDive04],
};

export default abyssalDive;
