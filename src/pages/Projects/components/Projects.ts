import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();

interface IProject {
  title: string;
  description: string[];
  links: string[];
  imgs: string[];
}

const Projects: IProject[] = [
  {
    title: t('projectsPage.kawaiiChat.title'),
    description: t('projectsPage.kawaiiChat.description'),
    links: [],
    imgs: [],
  },
];
export default Projects;
