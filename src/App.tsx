// *Styles
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.scss'

//* Assets
import pictureImg from './assets/picture.png'

export default function App() {
	return (
		<>
			<header className=''>
				<div className='container-md'>
					<div className='header-wrapper '>
						<div className='heading'>
							<span className='nationality'>Venezuelan</span>
							<h1 className=''>Jeferson Lugo</h1>
							<p>
								24yr old Web developer with a lot of passion, looking for
								challenges.
							</p>
						</div>
						<img src={pictureImg} />
					</div>
				</div>
			</header>
			<main></main>
		</>
	)
}
