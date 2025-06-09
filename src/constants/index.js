import { FiBriefcase } from 'react-icons/fi';
import { SiNextdotjs, SiSocketdotio } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Jak Asamouah',
    position: 'CEO JAK Technologies',
    img: 'assets/review1.png',
    review:
      'Working with Joshua was a fantastic experience. He alone transformed our website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'IntelHub',
    position: 'CEO IntelHub',
    img: 'assets/review2.png',
    review:
      'Joshua’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Lara Acousta',
    position: ' Enterpreneur',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Joshua. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Elintee Hotel',
    position: 'CEO of ElinTee Hotel',
    img: 'assets/review4.png',
    review:
      'Joshua was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'HMS - Hotel Management System',
    desc: 'HMS is a comprehensive hotel management system designed to streamline and automate all core hotel operations. It manages everything from guest reservations, room assignments, and housekeeping schedules to staff management, inventory tracking, and financial reporting. The platform also features integrated payment processing, a real-time live chat for staff and guest communication, and all essential tools required for efficient hotel administration.',
    subdesc:
      'Built with React.js, Next.js, Tailwind CSS, TypeScript, Node.js, and Socket.io, HMS delivers a robust, scalable, and user-friendly experience for modern hotel management.',
    href: 'https://hms.jaktechhub.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: '/assets/next.svg',
        icon: SiNextdotjs,
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
        icon: FaNodeJs,
      },
      {
        id: 6,
        name: 'Socket.io',
        path: '/assets/socketio.svg',
        icon: SiSocketdotio,
      },
    ],
  },
  {
    title: 'Advert Website - An Advert Website',
    desc: 'A dynamic advert platform that showcases a variety of products through engaging videos and interactive 3D presentations. The site is designed to captivate users and highlight product features in a visually compelling way, making it ideal for modern digital marketing.',
    subdesc:
      'Built with React.js, Typescript, Tailwind CSS, and Framer Motion, this project delivers smooth animations, responsive layouts, and immersive 3D experiences for product advertising.',
    href: 'https://productadverts.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
      
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Prosperio - An Inventory Management System',
    desc: 'Prosperio is an innovative inventory management platform designed to streamline essential business operations. It simplifies stock tracking, order processing, and inventory analysis, providing a seamless experience for both business owners and their teams.',
    subdesc:
      'With a focus on efficiency, Prosperio integrates dynamic inventory forms and automated notifications, using React, Tailwind CSS, Cloudinary, TypeScript, and other essential technologies to enhance operational workflows.',
    href: 'https://github.com/Jorshstar/Prosperios.git',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg,rgba(61, 26, 200, 0.31),rgba(58, 26, 173, 0.31)), linear-gradient(180deg, rgba(65, 24, 189, 0.9) 0%, rgba(65, 32, 185, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'ServeSmart - POS System',
    desc: 'ServeSmart is a point-of-sale management system designed to streamline restaurant operations. It simplifies order processing, inventory tracking, and customer transactions, ensuring a seamless experience for both restaurant staff and customers.',
    subdesc:
      'Built with React.js, Redux Toolkit, React Query, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, cors, Razorpay, REST API, Docker. ShopShift delivers a reliable and efficient solution tailored to the needs of modern restaurants.',
    href: 'https://github.com/Jorshstar/ServeSmart.git',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Ngreen - Logistics Application',
    desc: 'The NGreen Logistics Application is a comprehensive logistics management system comprising two mobile applications (for users and carriers) and an admin dashboard. The solution facilitates seamless parcel delivery services, offering real-time order placement, tracking, and communication between customers and carriers.',
    subdesc:
      'The NGreen Logistics Application is designed to provide a reliable and efficient logistics platform, combining powerful backend services with an intuitive frontend experience. The use of React, React Native, NextJS, Paystack and Google API integrations ensures a scalable and user-friendly solution for both customers and service providers. And also an Admin Dashboard for managing the entire logistics process.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Jak Technologies',
    pos: 'Software Developer',
    duration: '2022 - Present',
    title:
      "Collaborated closely with the frontend team to develop and maintain the company website using React, Next.js, and TypeScript, resulting in a 30% improvement in application efficiency and maintainability. Integrated real-time features such as live chat and notifications using technologies like Socket.io, enhancing user engagement and satisfaction by 35%.",
    icon: FiBriefcase,
    animation: 'victory',
  },
  {
    id: 2,
    name: 'IntelHub',
    pos: 'Fullstack Developer',
    duration: '2023 - 2024',
    title:
      "Led the end-to-end development of robust fullstack solutions, architecting scalable APIs and implementing secure authentication. Improved system reliability and user experience through performance tuning and seamless integration of modern web technologies.",
    icon: FiBriefcase,
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Climate Wavers',
    pos: 'Frontend Developer',
    duration: '2013 - 2024',
    title:
      "Crafted intuitive, accessible interfaces for climate-focused platforms, collaborating with multidisciplinary teams to launch impactful features that advanced the organization’s environmental mission and boosted user engagement.",
    icon: FiBriefcase,
    animation: 'salute',
  },
];