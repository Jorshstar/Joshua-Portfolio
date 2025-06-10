import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';

import Button from '../components/Button';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGitAlt, FaPython } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiZod,
  SiGithub,
  SiVercel,
  SiPostman,
  SiLinux,
  SiLinkedin,
} from 'react-icons/si';

import { FaCode } from 'react-icons/fa';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ajosh22.aj@gmail.com');

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const techStack = [
    { name: 'HTML', icon: <FaHtml5 className="text-2xl text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3 className="text-2xl text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-2xl text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-2xl text-[#3178C6]" /> },
    { name: 'ReactJS', icon: <FaReact className="text-2xl text-[#61DBFB]" /> },
    { name: 'NextJS', icon: <SiNextdotjs className="text-2xl text-[#000000]" /> }, // Next.js often associated with black
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-[#38B2AC]" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-2xl text-[#00A795]" /> },
    { name: 'Shadcn', icon: <FaReact className="text-2xl text-[#61DBFB]" /> }, // No specific icon, using React for now
    { name: 'NodeJS', icon: <FaNodeJs className="text-2xl text-[#3C873A]" /> },
    { name: 'ExpressJS', icon: <SiExpress className="text-2xl text-[#45B649]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-2xl text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-2xl text-[#4479A1]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-[#336791]" /> },
    { name: 'Prisma', icon: <SiPrisma className="text-2xl text-[#2D3748]" /> }, // Using a dark gray color

    { name: 'Zod', icon: <SiZod className="text-2xl text-[#3982CE]" /> }, // Using a blue color
    { name: 'Git', icon: <FaGitAlt className="text-2xl text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub className="text-2xl text-[#181717]" /> }, // Using a dark color
    { name: 'Vercel', icon: <SiVercel className="text-2xl text-[#000000]" /> }, // Vercel is black
    { name: 'Postman', icon: <SiPostman className="text-2xl text-[#FF6C37]" /> },
    { name: 'Java', icon: <FaCode className="text-2xl text-[#B07219]" /> },
    { name: 'Linux', icon: <SiLinux className="text-2xl text-[#FCC624]" /> },
    { name: 'Python', icon: <FaPython className="text-2xl text-[#3776AB]" /> },
  ];

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 gap-5 h-full">
        {/* About Me - Left */}
        <div className="xl:col-span-1 flex flex-col h-full">
          <div className="grid-container h-full flex flex-col">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-[50%] max-h-30 object-cover object-center rounded-t-2xl -mt-1"
            />
            <div>
              <p className="grid-headtext">I am Joshua Akinbode</p>
              <p className="grid-subtext">
                A passionate Software developer who thrives on building scalable and user-focused web experiences.
                Whether it’s designing clean, intuitive interfaces or engineering high-performing backend systems, I
                love turning ideas into functional, impactful products.
                <br />
                I work primarily with the MERN stack (MongoDB, Express.js, React, Node.js), alongside tools like
                Next.js, TypeScript, and Tailwind CSS. I’m always exploring how to make applications faster, smarter,
                and more delightful even with AI.
                <br /> 
                <br />
                Beyond code, I’m all about collaboration, growth, and solving meaningful problems. When I’m not deep in
                development, I’m probably learning something new or exploring creative ideas. Every line of code is a
                chance to improve lives — and that’s what drives me every day.
              </p>
              <div className="flex justify-center space-x-6 mt-6">
                <a href="https://github.com/Jorshstar" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="text-4xl text-white border border-white rounded-full p-2 hover:bg-gray-800 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/akinbodejoshua" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="text-4xl text-white border border-white rounded-full p-2 hover:bg-blue-700 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Tech Stack (top) and Globe (bottom), stacked vertically */}
        <div className="xl:col-span-2 flex flex-col h-full">
          <div className="grid xl:grid-rows-2 xl:h-full gap-5 h-full">
            {/* Tech Stack */}
            <div className="grid-container flex flex-col justify-between h-full">
              <div className="w-full h-54 mb-4 rounded-xl overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/assets/port-vid.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mb-4 text-center">
                <p className="text-sm text-gray-400 mb-2">I constantly try to improve my tech stack</p>
                <h2 className="text-2xl text-white font-extrabold tracking-tight">My Tech Stack</h2>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-2 md:gap-3">
                {techStack.map((tech, index) => (
                  <motion.button
                    key={tech.name}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: index * 0.03,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="flex items-center justify-center space-x-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 text-xs font-medium transition-all duration-200 min-w-[5rem] sm:min-w-[7rem]">
                    {tech.icon && <span className="text-sm">{tech.icon}</span>}
                    <span className="truncate text-[0.7rem] sm:text-xs">{tech.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
            {/* Globe */}
            <div className="grid-container flex flex-col justify-between h-full">
              <div className="rounded-3xl w-full flex justify-center items-center sm:h-[326px] h-fit">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0,0,0,0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    {
                      lat: 40,
                      lng: -100,
                      text: "I'm here",
                      color: 'black',
                      size: 30,
                    },
                  ]}
                />
              </div>
              <div>
                <p className="grid-headtext">I work remotely across most time zones</p>
                <p className="grid-subtext">I'm based in Nigeria, with remote work available</p>
                <a href="#contact" className='w-fit'>
                  <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* The rest of your grid (Collaboration and Contact) remains unchanged below */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full h-full mt-4 sm:h-[266px] rounded-xl  object-cover"
            />
            <div className="mt-8">
              <p className="grid-headtext">Collaboration and Communication</p>
              <p className="grid-subtext">
                I’m all about teamwork, whether we’re brainstorming on Zoom, dropping ideas in Slack, or giving feedback
                in Figma. I love bouncing ideas around, asking good questions, and keeping the vibe productive and fun.
                Good communication isn’t just a skill it’s my secret sauce for building great things together
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-3 h-full">
          <div className="grid-container h-full">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md-h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">joshuaakinbode61@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
