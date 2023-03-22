// *Assets
import goalsImg from '../assets/goal.png'

const goals = [
	'Work with teams and have a deeper understanding of the software industry.',
	'Learn everyday about best practices and new technologies.',
	'Master the bases of web deevelopment (HTML, CSS & JS).',
	'Become a full-stack developer (or something close to).',
	'Achieve economic freedom and travel the world',
	'Be a better version of myself each day.',
]

export default function Goals() {
	return (
		<section className='goals-section'>
			<div className='container'>
				<div className='goals-wrapper section-wrapper'>
					<h1 className='goals-title section-title'>My goals</h1>
					<div className='goals'>
						<img className='goals-img' src={goalsImg} alt='Goal logo' />

						{goals.map((goal, index) => (
							<p key={index} className={`goal goal-${index + 1}`}>
								{goal}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
