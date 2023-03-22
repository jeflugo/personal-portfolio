import pictureImg from '../assets/picture.png'

export default function Header() {
	return (
		<header className=''>
			<div className='container'>
				<div className='header-wrapper'>
					<img src={pictureImg} className='head-picture' />

					<div className='head'>
						<span className='head-nationality'>Venezuelan</span>
						<h1 className='head-title '>Jeferson Lugo</h1>
						<p className='head-description'>
							24yr old Web developer with a lot of passion, looking for
							challenges.
						</p>
						<div className='head-buttons'>
							<a href='#contact-section'>
								<button className='btn btn-primary contact-btn'>
									CONTACT ME
								</button>
							</a>
							<a href='#proyects-section'>
								<button className='btn btn-secondary'>My work</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
