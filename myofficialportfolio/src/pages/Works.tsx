import ProjectCard from "../components/ProjectCard"
import './works.css';

const arr: string[] = ["arr1", "arr2"];


const featuredProj = [
	{
		title: "ADMIN UI",
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
		link: "/works/featured/adminui"
	},
	{
		title: "DESIGN IMPORT",
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
		link: "/works/featured/designimport"
	},
	{
		title: "QUICKSTART",
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
		link: "/works/featured/quickstart"
	},
	{
		title: "AI GUARDRAILS",
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
		link: "/works/featured/aiguardrails"
	},
]
const personalProj = [
	{
		title: "BOLT FOOD",
		year: "2026",
		position: "UI/UX Developer",
		desc: "Rethinking the Bolt Food App Design",
		tags: [
			"Figma",
			"Design Thinking",
			"Wireframing",
			"Prototype",
			"Design System",
			"Web Awesome",
			"HTML",
			"CSS",
			"Javascript",
			"Lit.dev",
			"Storybook",
			"Typescript",
		],
		link: "/works/personalwork/boltfood"
	},
	{
		title: "CRYPTO APP",
		year: "2026",
		position: "UI/UX Developer",
		desc: "Redefining User Experience in Crypto Applications",
		tags: [
			"Figma",
			"Design Thinking",
			"Wireframing",
			"Prototype",
			"Design System",
			"Web Awesome",
			"HTML",
			"CSS",
			"Javascript",
			"Lit.dev",
			"Storybook",
			"Typescript",
		],
		link: "/works/personalwork/crypto"
	},
]

const Works = () => {
	return (
		<>
			<h1 className="font-title">Works</h1>
			<wa-tab-group>
				<wa-tab panel='featured-work'>Featured Work</wa-tab>
				<wa-tab panel='personal-project'>Personal Projects</wa-tab>
				<wa-tab-panel name='featured-work'>
					<div>
						{featuredProj.map((project, key) => (
							<ProjectCard
								key={key}
								projtitle={project.title}
								year={project.year}
								position={project.position}
								desc={project.desc}
								tags={project.tags}
								link={project.link}
							/>
						))}
						{/* <ProjectCard projtitle="AI GUARDRAILS" tags={arr}></ProjectCard>
						<ProjectCard projtitle="ADMIN UI" tags={arr}></ProjectCard>
						<ProjectCard projtitle="DESIGN IMPORT" tags={arr}></ProjectCard>
						<ProjectCard projtitle="QUICK START" tags={arr}></ProjectCard> */}
					</div>
				</wa-tab-panel>
				<wa-tab-panel name='personal-project'>
					<div>
						{personalProj.map((project, key) => (
							<ProjectCard
								key={key}
								projtitle={project.title}
								year={project.year}
								position={project.position}
								desc={project.desc}
								tags={project.tags}
								link={project.link}
							/>
						))}
					</div>
				</wa-tab-panel >
			</wa-tab-group>
		</>
	)
}

export default Works