/**
 * A hero section that displays a 3D animation of a hacker's room. The
 * animation is done using React-Three-Fiber. The section also contains a
 * title and a button to navigate to the about section.
 * 
 * @returns {JSX.Element} A JSX element representing the hero section.
 */

import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';


/**
 * A function component that renders the hero section.
 * 
 * @returns {JSX.Element} A JSX element representing the hero section.
 */
const Hero = () => {
  /**
   * Use media queries to determine screen size. We define three different
   * sizes: small (max width of 440px), mobile (max width of 768px), and
   * tablet (min width of 768px and max width of 1024px). We use these sizes to
   * position the 3D animation and the title and button in the section.
   */
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  /**
   * Calculate the sizes of the 3D animation and the title and button based on
   * the screen size.
   */
  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* 
        This section contains the hero section of the page. It renders a title, a tagline, and a button. 
        The title is responsive and changes size based on the screen size. The tagline is also responsive and changes size based on the screen size. The button is responsive and changes size based on the screen size. The button is also animated and has a "waving hand" emoji when hovered. The hero section also renders a 3D animation and a canvas loader. The canvas loader is a loading animation that appears when the 3D animation is loading. The hero section also renders a target and a react logo. The target is a 3D model of a target and the react logo is a 3D model of the react logo. The 3D animation is rendered inside a group and positioned using the `position` prop. The `position` prop is calculated based on the screen size. The 3D animation is also animated using the `useFrame` hook. The `useFrame` hook is used to update the position of the 3D animation based on the current time. The `useFrame` hook is called every frame and updates the position of the 3D animation. The hero section also renders a perspective camera and a ambient light. The perspective camera is used to render the 3D animation and the ambient light is used to add some ambient light to the scene. The hero section also renders a directional light. The directional light is used to add some light to the scene. The hero section is rendered inside a section element with the class name of "w-full h-full absolute inset-0". The section element is a child of the root element of the page. The section element is used to position the hero section at the top of the page and to make it take up the full width and height of the page. The section element is also used to add some padding to the hero section. The padding is used to add some space between the hero section and the other sections of the page. */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hello, I am Joshua Akinbode <span className="waving-hand">✌</span>
        </p>
        <p className="hero_tag text-gray_gradient">A Software Engineer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller
            it helps us get the perfect sizes */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom 
              scale={sizes.deskScale} 
              position={sizes.deskPosition} 
              rotation={[0.1, -Math.PI, 0]} 
            />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
