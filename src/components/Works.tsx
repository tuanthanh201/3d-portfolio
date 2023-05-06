import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, website } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

type tag = {
	name: string;
	color: string;
};

interface ProjectCardProps {
	index: number;
	name: string;
	description: string;
	tags: tag[];
	image: string;
	sourceCodeLink?: string;
	websiteLink?: string;
}

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	sourceCodeLink,
	websiteLink,
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
			>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt={name}
						className='w-full h-full object-cover rounded-2xl'
					/>
					<div className='absolute inset-0 flex justify-end m-3 gap-2 card-img_hover'>
						{sourceCodeLink && (
							<div
								onClick={() => window.open(sourceCodeLink, '_blank')}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img src={github} alt='github' className='w-1/2 h-1/2' />
							</div>
						)}
						{websiteLink && (
							<div
								onClick={() => window.open(websiteLink, '_blank')}
								className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img src={website} alt='website' className='w-1/2 h-1/2' />
							</div>
						)}
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
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
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<p className={styles.sectionHeadText}>Projects</p>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('none', '', 0.1, 1)}
					className='mt-3 text-secondary max-w-3xl leading-[30px] text-[17px]'
				>
					Following projects showcase my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories or live demos. They reflect my ability to
					solve complex problems, work with different technologies, and
					collaborate with others.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

const WrappedWorks = SectionWrapper(Works, 'work');

export default WrappedWorks;
