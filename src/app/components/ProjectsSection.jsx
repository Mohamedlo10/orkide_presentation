"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Login",
    description: "Page de connexion d'ORKIDE",
    image: "/ACCUEIL.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Emploi du temps",
    description: "Un emploi du temps complet integrant la liste des cours par professeur et par classe ",
    image: "/EDP.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "ETUDE",
    description: "Cette partie est entre autre consacrer au parametrage du modele educatif de l'ecole",
    image: "/PARAMETUDE.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Gestion des Utilisateurs",
    description: "Cette partie est concue pour la gestion du personnel et des professeurs",
    image: "/USER.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  }/* ,
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }, */
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="h-[100vh] py-16">
      <div className="text-white mb-4  lg:leading-normal font-extrabold flex flex-row justify-center text-6xl items-center gap-2 py-12">
        DEMO
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            className="bg-cover h-[50vh]"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
