import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  fastapi,
  figmaIcon,
  checkout,
  personalweb,
  avatar,
  orandaIcon,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  fastapi,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hey there, it’s Mohammed Odeh! ",

    "I am a dedicated and passionate computer science student who has the relentless drive needed in the evolving world of technology. My work experience and projects have allowed me to learn many new things, and get a feel for what working in the field is actually like. With hands-on experience using React, FastAPI, Python, and PostgreSQL, I'm constantly expanding my skill set to stay ahead in the fast-paced environment that we work in.",

    "Lets work together to overcome challenges, and create solutions that make a difference.",

  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  }

];

const projects = [
  {
    name: "VisionSelfCheckout",
    description: 'A self-checkout system using a custom-trained YOLOv8 model for accurate object detection and recognition.',
    image: checkout,
    source_code_link: 'https://github.com/moeodeh3/VisionSelfCheckout',
    demo_link: 'https://github.com/moeodeh3/VisionSelfCheckout',
  },
  {
    name: "Personal Porfolio",
    description: 'My Personal Portfolio, developed using React, Vite, and Tailwind CSS, is hosted on GitHub Pages, and my domain is registered through Google Domains.',
    image: personalweb,
    source_code_link: 'https://github.com/moeodeh3/moeodeh3.github.io',
    demo_link: 'https://github.com/moeodeh3/moeodeh3.github.io',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a robust expertise in HTML, enabling me to proficienty structure web pages.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have over a year of experience in employing JavaScript, enabling me to skillfully incorporate interactivity and functionality into web pages.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am certified in React, which allows me to create reusable components, apply state using hooks and context, ultimately allowing me to build dynamic web pages.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'With over three years of experience in object-oriented programming and implementing data structures, I am well-versed in Java',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'I am proficient in utilizing Figma to assist in designing and structuring CSS layouts.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I possess proficiency in utilizing Git for efficient code management, and facilitating collaborative workflows, enabling me to work in a team environment seamlessly',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'My experience in Github empowers me to adeptly create and manage repositories, ultamitly allowng me to contribute to the open-source community and showcasing my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'During my time at Oranda as an intern, I got hands-on with PostgreSQL. This included crafting and handling complex database schemas. This practical experience covered diverse areas like database normalization, triggers, and front-end connectivity.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With three years of Python experience under my belt, I have refined my skills in back-end development, focusing particularly on AI.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have gained practical familiarity working with Raspberry Pi when I used Pi-hole to create a network-wide ad blocker, showcasing my ability to implement impactful solutions.',
  },
  {
    id: 'fastapi',
    title: 'FastAPI',
    icon: fastapi,
    description:
      'Ive got firsthand experience working with FastAPI from my time at Oranda. While I was there, I skillfully linked up front-end and backend using FastAPI FastAPIs high-performance web framework',
  },
];

const cardInfo={
    company: "Oranda",
    companylogo: orandaIcon,
    role: "Software Developer Intern",
    date: "December 2022 - April 2023",
    desc: "During my internship at this startup, I focused on backend development using FastAPI. I optimized data processing for seamless communication between components. Additionally, I fine-tuned image generation models, enhancing their quality. I also played a role in shaping the database using PostgreSQL, implementing features and ensuring smooth migrations with Alembic. This experience allowed me to blend theory and practical skills, leaving a notable impact on the company's technological advancements.",
}

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
  cardInfo,
};
