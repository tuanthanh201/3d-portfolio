import { blockbreaker, dino, shirtModels, tomatoes, winrate } from '../assets';
import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	reactjs,
	redux,
	nodejs,
	mongodb,
	git,
	threejs,
	nokia,
	omers,
	singlestore,
	graphql,
	nextjs,
	sql,
	blogger,
	portfolio,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Software Developer',
		icon: creator,
	},
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Full-stack Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
];

const technologies = [
	// {
	// 	name: 'HTML 5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS 3',
	// 	icon: css,
	// },
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	// {
	// 	name: 'c++',
	// 	icon: cPlusPlus,
	// },
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Next JS',
		icon: nextjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	// {
	// 	name: 'Tailwind CSS',
	// 	icon: tailwind,
	// },
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'sql',
		icon: sql,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'graphql',
		icon: graphql,
	},
	// {
	// 	name: 'figma',
	// 	icon: figma,
	// },
	// {
	// 	name: 'docker',
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: 'Software Engineer',
		companyName: 'SingleStore',
		icon: singlestore,
		iconBg: '#E6DEDD',
		date: 'May - Jul 2023',
		points: [
			'Developed a new quota system from scratch utilizing Go and Postgres to efficiently manage and monitor credit and storage usage, resulting in improved resource allocation and enhanced performance',
			'Created a user-friendly jobs page with React and GraphQL, enabling users to effortlessly access and search for tasks associated with their clusters',
			'Built a Copilot for the SQL Editor during a company hackathon, utilizing a generative AI model fine-tuned with SQL to enhance developer productivity through text generation and completion functionalities',
			'Demonstrated strong collaboration and coding skills by creating +40 merge requests within a 3-month period, successfully landing more than half of them',
		],
	},
	{
		title: 'Full-stack Developer',
		companyName: 'OMERS',
		icon: omers,
		iconBg: '#383E56',
		date: 'Sept - Dec 2022',
		points: [
			'Designed and developed a social network application utilizing Next.js and Socket.io, enabling employees to connect and communicate with each other more easily and efficiently',
			'Increased test coverage by 5% by writing comprehensive unit, integration, and end-to-end tests using Jest, resulting in a more robust and reliable application',
			'Optimized code efficiency and maintainability by managing side effects using Redux-Saga, resulting in improved readability and streamlined development processes',
		],
	},
	{
		title: 'Web Developer',
		companyName: 'Nokia',
		icon: nokia,
		iconBg: '#E6DEDD',
		date: 'Jan - Apr 2022',
		points: [
			'Engineered React-based user interface components to optimize network resources in IP/MPLS applications',
			'Designed and implemented a comprehensive graphical system to visualize network connections and latency between IP addresses',
			'Enhanced user experience by creating a user-friendly form for creating Segment Routing paths, consolidating different forms into one recursive form',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

type TextGradient =
	| 'pink-text-gradient'
	| 'blue-text-gradient'
	| 'yellow-text-gradient'
	| 'green-text-gradient'
	| 'orange-text-gradient';

interface Tag {
	name: string;
	color: TextGradient;
}

interface Project {
	name: string;
	description: string;
	tags: Tag[];
	image: string;
	websiteLink?: string;
	sourceCodeLink?: string;
}

const projects: Project[] = [
	{
		name: 'Chess Pro',
		description:
			'A Chrome chess bot extension that runs on chess.com and lichess.org, with +14,000 users and 4/5 ratings.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
		],
		image: winrate,
		websiteLink:
			'https://chrome.google.com/webstore/detail/chess-pro/oabpbnkggjfhodegmdoaamjfimfbomna',
	},
	{
		name: 'Portfolio',
		description: 'My previous personal website built with React and Three.js.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'threejs',
				color: 'green-text-gradient',
			},
		],
		image: portfolio,
		websiteLink: 'https://nextjs-rosy-phi.vercel.app/',
	},
	{
		name: 'Blogger',
		description:
			'A blogging website where users can post their daily blogs. Markdown is supported.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'yellow-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'graphql',
				color: 'pink-text-gradient',
			},
			{
				name: 'aws',
				color: 'orange-text-gradient',
			},
		],
		image: blogger,
		sourceCodeLink: 'https://github.com/tuanthanh201/Blog',
	},
	{
		name: '3D Shirt Models',
		description:
			'An interactive platform that empowers users to unleash their creativity by designing unique t-shirt models.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
			{
				name: 'threejs',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: shirtModels,
		sourceCodeLink: 'https://github.com/tuanthanh201/3d-modelling',
		websiteLink:
			'https://6469824249813417f5d83f6c--sage-khapse-6615ac.netlify.app/?fbclid=IwAR177FYfytompmRNrCPnYYFA_6HvazQxfEBOeSUjuNEurXKBeKhUS2wtB-E',
	},
	{
		name: 'Fresh Tomatos',
		description: 'A movie review website built with React, Node.js, and SQL.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'nodejs',
				color: 'green-text-gradient',
			},
			{
				name: 'sql',
				color: 'pink-text-gradient',
			},
		],
		image: tomatoes,
		sourceCodeLink: 'https://git.uwaterloo.ca/a368gupt1/cs348-project',
	},
	{
		name: 'Blockbreaker',
		description: 'A simple game built with Unity.',
		tags: [
			{
				name: 'C#',
				color: 'blue-text-gradient',
			},
			{
				name: 'Unity',
				color: 'green-text-gradient',
			},
		],
		image: blockbreaker,
		sourceCodeLink: 'https://github.com/tuanthanh201/blockbreaker',
	},
	{
		name: 'Dino',
		description: 'A simple game built with Unity.',
		tags: [
			{
				name: 'C#',
				color: 'blue-text-gradient',
			},
			{
				name: 'Unity',
				color: 'green-text-gradient',
			},
		],
		image: dino,
		sourceCodeLink: 'https://github.com/tuanthanh201/dino',
	},
];

export { services, technologies, experiences, testimonials, projects };
