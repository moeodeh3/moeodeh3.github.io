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
  clockIn,
  avatar,
  orandaIcon,
  nestwalletIcon,
  pyTorch,
  tensorflow,
  pandas,
  numpy,
  c,
  anaconda,
  gcp,
  docker,
  background,
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
    'Hey there, it’s Mohammed Odeh! ',

    "I am a dedicated and passionate computer science student who has the relentless drive needed in the evolving world of technology. My work experience and projects have allowed me to learn many new things, and get a feel for what working in the field is actually like. With hands-on experience using React, FastAPI, Python, and PostgreSQL, I'm constantly expanding my skill set to stay ahead in the fast-paced environment that we work in.",

    'Lets work together to overcome challenges, and create solutions that make a difference.',
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
  },
];

const projects = [
  {
    name: 'VisionSelfCheckout',
    description:
      'A full-stack self-checkout system leveraging computer vision for object detection and recognition. The source code includes a React front-end, Python-based backend with a custom YOLOv8 model, and a PostgreSQL database',
    tags: [
      {
        name: 'React',
        color: 'text-blue',
      },
      {
        name: 'PyTorch',
        color: 'text-green',
      },
      {
        name: 'FastAPI',
        color: 'text-pink',
      },
      {
        name: 'PostgreSQL',
        color: 'text-yellow',
      },
      {
        name: 'Python',
        color: 'text-purple',
      },
    ],
    image: checkout,
    source_code_link: 'https://github.com/moeodeh3/VisionSelfCheckout',
  },
  {
    name: 'ClockIn',
    description:
      'A full-stack application for a fingerprint recognition clock-in system with a database stored on GCP. The source code includes a React front-end, Python-based backend powered by FastAPI, complemented by an admin panel',
    tags: [
      {
        name: 'React',
        color: 'text-green',
      },
      {
        name: 'UART',
        color: 'text-blue',
      },
      {
        name: 'FPR',
        color: 'text-red',
      },
      {
        name: 'GCP',
        color: 'text-yellow',
      },
      {
        name: 'FastAPI',
        color: 'text-pink',
      },
    ],
    image: clockIn,
    source_code_link: 'https://github.com/moeodeh3/ClockIn',
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
    id: 'anaconda',
    title: 'Anaconda',
    icon: anaconda,
    description:
      'I have used Anaconda in multiple projects, especially as a package manager for AI-related projects',
  },
  {
    id: 'gcp',
    title: 'GCP',
    icon: gcp,
    description:
      'I have used Google Cloud Platform (GCP) in multiple projects, particularly for hosting databases',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'With over three years of experience in object-oriented programming and implementing data structures, I am well-versed in Java',
  },
  {
    id: 'pandas',
    title: 'Pandas',
    icon: pandas,
    description:
      'During my time at Oranda, I worked with the Pandas library to create an innovative AI-driven art platform',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
      'I am proficient in utilizing Figma to assist in designing and structuring CSS layouts.',
  },
  {
    id: 'pyTorch',
    title: 'PyTorch',
    icon: pyTorch,
    description:
      'During my time at Oranda, I used PyTorch to create an innovative AI-driven art platform',
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: docker,
    description:
      'During my time at Oranda, I used Docker to deploy and test an innovative AI-driven art platform. This allowed for efficient and consistent testing and deployment of our solution',
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
    id: 'tensorflow',
    title: 'Tensorflow',
    icon: tensorflow,
    description:
      'During my time at Oranda, I used Tensorflow to create an innovative AI-driven art platform',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With three years of Python experience under my belt, I have refined my skills in back-end development, focusing particularly on AI.',
  },
  {
    id: 'c',
    title: 'C',
    icon: c,
    description: 'I have a basic understanding of C from my school coursework',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'numpy',
    title: 'NumPy',
    icon: numpy,
    description:
      'I gained significant experience using the NumPy library in numerous projects',
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
      'I have got firsthand experience working with FastAPI from my time at Oranda. While I was there, I seamlessly linked up front-end and backend using FastAPIs high-performance web framework',
  },
];

const cardInfo = [
  {
    company: 'Oranda',
    companylogo: orandaIcon,
    backgroundColor: '#ff914c',
    role: 'Software Developer Intern',
    date: 'December 2022 - April 2023',
    descBullets: [
      'Led development on the back-end infrastructure for an innovative AI-driven art platform, using PyTorch, FastAPI, GCP, and PostgreSQL',
      'Reduced inference cost by 40% for a proprietary Stable Diffusion model by transitioning to serverless GPU hosting',
      'Developed an innovative legal tool that transformed the process of navigating PDF documents into a seamless, AI-enhanced experience for a prominent real estate firm',
    ],
  },
  {
    company: 'Nest Wallet',
    companylogo: nestwalletIcon,
    backgroundColor: '#facc15',
    role: 'Fullstack Engineer Intern',
    date: 'January 2024 - August 2024',
    descBullets: [
      'Integrated real-time on-chain trade data, streaming it to the frontend via WebSocket connections, enabling live updates and data visualization similar to Dex Screener',
      'Built a Quest System using React and Golang that included crypto-related quests enhancing user engagement',
      'Added a Security Report system for Solana and Ethereum tokens, calculating a risk score based on flagged risks and displaying key metrics such as top holders and token liquidity',
      'Developed a Promo Code system for users, enabling blockchain-specific discounts and XP rewards',
      'Desgined a Referral Rewards Portal for mobile and web, implementing real-time calculations of referral earnings based on trade volume',
      'Added OAuth authentication for Twitter and Discord',
    ],
  },
];

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
