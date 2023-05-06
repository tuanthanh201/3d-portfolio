import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useRef, useState } from 'react';

const isValidEmail = (email: string): boolean => {
	const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	return regex.test(email);
};

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email, message } = form;

		if (
			name.trim().length === 0 ||
			!isValidEmail(email) ||
			message.trim().length === 0
		)
			return;

		setLoading(true);
		emailjs
			.send(
				'service_4qfr9gq',
				'template_bl36yvl',
				{
					from_name: name,
					to_name: 'Thanh',
					from_email: email,
					to_email: 'ngthanh2248@gmail.com',
					message: message,
				},
				'exCyHUCFM4Sz6mW-N'
			)
			.then(
				() => {
					setLoading(false);
					alert('Thank you. I will get back to you as soon as possible.');
					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					alert('Something went wrong. Please try again later.');
				}
			);
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl opacity-80'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact</h3>

				<form
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Email</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Message</span>
						<textarea
							rows={7}
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='What do you want to say?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<button
						type='submit'
						className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

const WrappedContact = SectionWrapper(Contact, 'contact');

export default WrappedContact;
