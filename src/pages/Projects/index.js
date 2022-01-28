import React from "react";
import H1 from "../../components/H1";
import ProjectFilter from "../../components/ProjectFilter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const projectCards = [
    {
      title: "Piggment",
      description: "The Gradients and colours for the next smart creator",
      labels: ["React", "Sass & CSS", "JavaScript", "Context"],
    },
    {
      title: "Scoutbar",
      description:
        "Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navigate the web.",
      labels: ["Typescript", "Rollup", "React", "Nextjs"],
    },
    {
      title: "Shoprrr",
      description: "An E-commerce Application For Buying Cotton Products.",
      labels: ["React", "Redux Saga", "Javascript", "Firebase"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
    {
      title: "54gene",
      description: "Discover Yourself Through Your Genes.",
      labels: ["Vuejs", "Javascript", "Vuex"],
    },
  ];
  return (
    <div>
      <Header />
      <div className="projects">
        <H1 text="Projects." />
        <div className="projectContent">
          <div className="filters">
            <ProjectFilter
              filters={[
                "All",
                "Projects",
                "Dev Tools",
                "Open  Source",
                "Designs",
              ]}
            />
          </div>
          <div className="projectCards">
            {projectCards.map(({ title, description, labels }) => (
              <ProjectCard
                title={title}
                description={description}
                labels={labels}
              />
            ))}
          </div>
        </div>
        <Footer navTo="/resume" linkText="Lets Go To My Resume." />
      </div>
    </div>
  );
}

export default Projects;
