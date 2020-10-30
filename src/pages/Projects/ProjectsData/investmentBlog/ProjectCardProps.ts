import { ProjectCardProps } from '../../components/ProjectCard';
import investmentBlog01 from './images/investmentBlog01.png';
import investmentBlog02 from './images/investmentBlog02.png';
import investmentBlog03 from './images/investmentBlog03.png';
import investmentBlog04 from './images/investmentBlog04.png';

const investmentBlog: ProjectCardProps = {
  title: 'projectsPage.investmentBlog.title',
  description: ['projectsPage.investmentBlog.description.part1', 'projectsPage.investmentBlog.description.part2'],
  links: [{ href: 'https://github.com/WELL1NGTON/investment-blog-docker', icon: 'Github' }],
  imgs: [investmentBlog01, investmentBlog02, investmentBlog03, investmentBlog04],
};

export default investmentBlog;
