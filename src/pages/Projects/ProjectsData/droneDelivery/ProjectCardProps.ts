import { ProjectCardProps } from '../../components/ProjectCard';
import droneDelivery01 from './images/droneDelivery01.webp';
import droneDelivery02 from './images/droneDelivery02.webp';
import droneDelivery03 from './images/droneDelivery03.webp';

const droneDelivery: ProjectCardProps = {
  title: 'projectsPage.droneDelivery.title',
  description: ['projectsPage.droneDelivery.description.part1', 'projectsPage.droneDelivery.description.part2'],
  links: [
    { href: 'https://play.google.com/store/apps/details?id=org.godotengine.dronedeliverygame', icon: 'Googleplay' },
    { href: 'https://github.com/WELL1NGTON/DroneDeliveryGame', icon: 'Github' },
  ],
  imgs: [droneDelivery01, droneDelivery02, droneDelivery03],
};

export default droneDelivery;
