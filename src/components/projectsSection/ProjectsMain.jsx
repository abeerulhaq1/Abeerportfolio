import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Bayut.com",
    year: "Mar2024",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://www.bayut.com/",
  },
  {
    name: "Custom Pins",
    year: "May2025",
    align: "left",
    image: "../../public/images/website-img-1.jpg",
    link: "",
  },
  {
    name: "UE Softionix",
    year: "Sep2023",
    align: "right",
    image: "../../public/images/website-img-2.webp",
    link: "https://www.uesoftionix.com/",
  },
  {
    name: "Digi Store",
    year: "July2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://www.dszstore.digiservicezone.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
