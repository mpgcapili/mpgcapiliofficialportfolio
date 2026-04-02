import ProjectCard from "../components/ProjectCard";
import "./works.css";
/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const featuredProj = [
  {
    title: "ADMIN UI",
    alias: "adminui",
    year: "2022 - 2024",
    position: "UI/UX Designer",
    desc: "Website that handles Database schemas, views, agents, etc.",
    tags: [
      "Figma",
      "Design Thinking",
      "Design System",
      "Wireframing",
      "Prototype",
    ],
    link: "/works/featured/adminui",
  },
  {
    title: "DESIGN IMPORT",
    alias: "designimport",
    year: "2023 - 2024",
    position: "UI/UX Designer",
    desc: "A wizard that converts application's old version to new version",
    tags: [
      "Figma",
      "Design Thinking",
      "Design System",
      "Wireframing",
      "Prototype",
    ],
    link: "/works/featured/designimport",
  },
  {
    title: "QUICKSTART",
    alias: "quickstart",
    year: "2023 - 2024",
    position: "UI/UX Developer",
    desc: "A website that manages server's settings",
    tags: [
      "Figma",
      "Design Thinking",
      "Design System",
      "Wireframing",
      "Prototype",
      "ReactJS",
      "HTML",
      "CSS",
      "Javascript",
      "Material UI",
    ],
    link: "/works/featured/quickstart",
  },
  {
    title: "AI GUARDRAILS",
    alias: "aiguardrails",
    year: "2025 - Current",
    position: "UI/UX Developer",
    desc: "A web app that manages one AI subscription for a whole team",
    tags: [
      "Figma",
      "Design Thinking",
      "Design System",
      "Design System",
      "Wireframing",
      "Prototype",
      "Web Awesome",
      "HTML",
      "CSS",
      "Javascript",
      "Lit.dev",
      "Storybook",
    ],
    link: "/works/featured/aiguardrails",
  },
];
// const personalProj = [
//   {
//     title: "BOLT FOOD",
//     alias: "boltfood",
//     year: "2026",
//     position: "UI/UX Developer",
//     desc: "Rethinking the Bolt Food App Design",
//     tags: [
//       "Figma",
//       "Design Thinking",
//       "Wireframing",
//       "Prototype",
//       "Design System",
//       "Web Awesome",
//       "HTML",
//       "CSS",
//       "Javascript",
//       "Lit.dev",
//       "Storybook",
//       "Typescript",
//     ],
//     link: "/works/personalwork/boltfood",
//   },
//   {
//     title: "CRYPTO APP",
//     alias: "cryptoapp",
//     year: "2026",
//     position: "UI/UX Developer",
//     desc: "Redefining User Experience in Crypto Applications",
//     tags: [
//       "Figma",
//       "Design Thinking",
//       "Wireframing",
//       "Prototype",
//       "Design System",
//       "Web Awesome",
//       "HTML",
//       "CSS",
//       "Javascript",
//       "Lit.dev",
//       "Storybook",
//       "Typescript",
//     ],
//     link: "/works/personalwork/crypto",
//   },
// ];

const Works = () => {
  // target only the work-container to have smoothscroll
  // this will disable smart nav because we defined fix height for the content, therefore not triggering the scrollbar
  // @todo: find a way to fix this bug
  useEffect(() => {
    const content = document.querySelector('.work-container');
    if (!content) return;
    // const locomotiveScroll = new LocomotiveScroll();
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: content,
        content: content,
        syncTouch: true,
      },
    });

    return () => {
      locomotiveScroll.destroy();
    }
  }, [])

  return (
    <>
      <div className="work-container" >
        <div>
          {/* <h1 className="font-title">Works</h1> */}
          <wa-tab-group>
            <wa-tab panel="featured-work">Featured Work</wa-tab>
            {/* personal project not yet done */}
            {/* <wa-tab panel="personal-project">Personal Projects</wa-tab> */}
            <wa-tab-panel name="featured-work">
              <div>
                {featuredProj.map((project, key) => (
                  <ProjectCard
                    key={key}
                    projtitle={project.title}
                    alias={project.alias}
                    year={project.year}
                    position={project.position}
                    desc={project.desc}
                    tags={project.tags}
                    link={project.link}
                  />
                ))}
              </div>
            </wa-tab-panel>
            {/* <wa-tab-panel name="personal-project">
              <div>
                {personalProj.map((project, key) => (
                  <ProjectCard
                    key={key}
                    projtitle={project.title}
                    alias={project.alias}
                    year={project.year}
                    position={project.position}
                    desc={project.desc}
                    tags={project.tags}
                    link={project.link}
                  />
                ))}
              </div>
            </wa-tab-panel> */}
          </wa-tab-group>
        </div>
      </div>
    </>
  );
};

export default Works;
