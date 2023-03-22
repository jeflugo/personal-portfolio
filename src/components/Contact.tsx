import { ChangeEvent, FormEvent, useState } from 'react'

// Assets
import githubImg from '../assets/github.png'
import linkedinImg from '../assets/linkedin.png'

export default function Contact() {
	const initialFormData = {
		email: '',
		subject: '',
		message: '',
	}
	const [formData, setFormData] = useState(initialFormData)

	const linkedIn = 'https://www.linkedin.com/in/jeferson-lugo/'
	const github = 'https://github.com/jeflugo'

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData(currentFormData => ({
			...currentFormData,
			[e.target.name]: e.target.value,
		}))
	}
	const resetFormData = () => setFormData(currentFormData => initialFormData)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(e)

		resetFormData()
	}

	return (
		<section className='contact-section' id='contact-section'>
			<div className='container'>
				<div className='contact-wrapper section-wrapper'>
					<h1 className='contact-title section-title'>Contact</h1>
					<form
						className='contact-form'
						action='https://formspree.io/f/mayzdjjr'
						method='POST'
					>
						<div className='form-group'>
							<label htmlFor='email-field'>Email</label>
							<input
								type='email'
								name='email'
								id='email-field'
								className='email-field'
								placeholder='jonhdoe@me.com'
								required
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='subject-field'>Subject</label>
							<input
								type='text'
								name='subject'
								id='subject-field'
								className='email-field'
								placeholder='Lets get you in an interview'
								required
								value={formData.subject}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='message-field'>Message</label>
							<textarea
								name='message'
								id='message-field'
								className='message-field'
								placeholder='We would like to set up an interview for you, reach out to schudule it as soon as posible'
								required
								value={formData.message}
								onChange={handleChange}
							></textarea>
						</div>

						<div className='buttons'>
							<button className='btn btn-primary' type='submit'>
								SEND MESSAGE
							</button>
							<div className='my-links'>
								<a
									href={linkedIn}
									title='Visit my LinkedIn profile'
									target='_blank'
								>
									<img src={linkedinImg} alt='LinkedIn logo' />
								</a>
								<a
									href={github}
									title='Visit my Github profile'
									target='_blank'
								>
									<img src={githubImg} alt='Github logo' />
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
