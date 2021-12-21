import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      // level: 1,
    },
    {
      title: 'AWS',
      // level: 1,
    },
    {
      title: 'PHP',
      // level: 1,
    },
    {
      title: 'Java',
      // level: 3,
    },
    {
      title: 'Python',
      // level: 1,
    },
    {
      title: 'C/C++',
      // level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      // level: 1,
    },
    {
      title: 'Oracle',
      // level: 3,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
      // level: 2,
    },
    {
      title: 'javascript',
      // level: 2,
    },
    {
      title: 'HTML/CSS',
      // level: 2,
    },
    {
      title: 'C#',
      // level: 2,
    },
    {
      title: 'Electron',
      // level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Mantis',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'DBeaver',
    },
    {
      title: 'MES',
    },
    {
      title: 'eclipse',
    },
    {
      title: 'visual studio',
    },
    {
      title: 'git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
