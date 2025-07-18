import { useState } from "react"
import { myProjects } from "../constants"
import { Canvas } from "@react-three/fiber"
import { Center } from "@react-three/drei"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader.jsx"
import DemoComputer from "../components/DemoComputer.jsx"
import { OrbitControls } from "@react-three/drei"

const projectCount = myProjects.length

const Project = () => {
  const [selectedProjectIndex, SetSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]

  const handleNavigation = (direction) => {
    SetSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  return (
    <section className="c-space my-20">
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 reklative sm:p-10 py-10 px-5 hadow-2xl">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
              <p className="animatedText text-white">{currentProject.desc}</p>
              <p className="animatedText text-white">{currentProject.subdesc}</p>
              <div className="flex items-center justify-between flex-wrap gap-5 ">
                <div className="flex items-center gap-3">
                  {currentProject.tags.map((tag, index) => (
                    <div key={index} className="tech-logo flex items-center">
                      {tag.icon ? (
                        // Add color for each icon based on the tech
                        tag.name === "Next.js" ? (
                          <tag.icon className="w-5 h-5 text-black dark:text-white" />
                        ) : tag.name === "Node.js" ? (
                          <tag.icon className="w-5 h-5 text-green-600" />
                        ) : tag.name === "Socket.io" ? (
                          <tag.icon className="w-5 h-5 text-gray-500" />
                        ) : tag.name === "TypeScript" ? (
                          <tag.icon className="w-5 h-5 text-blue-500" />
                        ) : tag.name === "TailwindCSS" ? (
                          <tag.icon className="w-5 h-5 text-sky-400" />
                        ) : (
                          <tag.icon className="w-5 h-5 text-white" />
                        )
                      ) : (
                        <img src={tag.path} alt={tag.name} className="w-5 h-5" />
                      )}
                    </div>
                  ))}
                </div>
                <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex item-center gap-2 cursor-pointer text-white-600">
                  <p>Check Live Site</p>
                  <img src="./assets/arrow-up.png" className="w-3 h-3 " alt="arrow" />
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="./assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
              </button>
              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="./assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2}
                  position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Project