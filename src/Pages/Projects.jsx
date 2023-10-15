import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { githubIcon } from "../assets";
import { projects } from "../Constants/constants";
import SectionTitle from "../Components/SectionTitle";


export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#1d0930] p-5 rounded-2xl sm:w-[400px] w-full mb-5"
      >
        <div className="relative w-full h-[190px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <div className='flex justify-between' >

          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <img
                src={githubIcon}
                alt="github"
                className="w-10 h-10 object-contain"
                onClick={() => window.open(source_code_link, "_blank")}
          />

          </div>
          
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (

    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[1100px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[50%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="PROJECTS" subtitle="Who I worked with so far" />
        </div>


        <div className="flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

      </div>
    </div>


  );
};

export default Works;
