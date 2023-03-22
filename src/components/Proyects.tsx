// *Assets
import proyect1Img from '../assets/proyects/proyect1-img.png'

import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react.png'
import typescriptImg from '../assets/typescript.png'
import sassImg from '../assets/sass.png'
import bootstrapImg from '../assets/bootstrap.png'
import figmaImg from '../assets/figma.png'

import githubImg from '../assets/github.png'
import siteImg from '../assets/site.png'

const techs = {
	html: {
		name: 'HTML5',
		img: htmlImg,
	},
	css: {
		name: 'CSS3',
		img: cssImg,
	},
	js: {
		name: 'JavaScript',
		img: jsImg,
	},
	react: {
		name: 'ReactJS',
		img: reactImg,
	},
	typescript: {
		name: 'TypeScript',
		img: typescriptImg,
	},
	sass: {
		name: 'Sass',
		img: sassImg,
	},
	bootstrap: {
		name: 'Bootstrap',
		img: bootstrapImg,
	},
	figma: {
		name: 'Figma',
		img: figmaImg,
	},
}

const proyects = [
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
	{
		headingImg: proyect1Img,
		name: 'Fake portfolio',
		technologies: [
			techs.html,
			techs.css,
			techs.js,
			techs.react,
			techs.typescript,
			techs.bootstrap,
			techs.sass,
			techs.figma,
		],
		pageLink: {
			img: siteImg,
			src: '#',
		},
		repoLink: {
			img: githubImg,
			src: '#',
		},
	},
]

export default function Proyects() {
	return (
		<section className='proyects-section' id='proyects-section'>
			<div className='container'>
				<div className='proyects-wrapper section-wrapper'>
					<h1 className='proyects-title section-title'>My work</h1>
					<div className='proyects'>
						{proyects.map((proyect, index) => (
							<div key={index} className='proyect'>
								<img
									className='proyect-img'
									src={proyect.headingImg}
									alt={`${proyect.name} thumbnail`}
								/>
								<div className='proyect-head'>
									<h4 className='proyect-title'>{proyect.name}</h4>
								</div>
								<div className='proyect-body'>
									<div className='proyect-techs-wrapper'>
										<ul className='proyect-techs'>
											{proyect.technologies.map((tech, index) => (
												<li key={index} className='proyect-tech'>
													<img
														className='proyect-logo'
														src={tech.img}
														alt={`${tech.name} logo`}
													/>
													<span>{tech.name}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className='proyect-footer'>
									<a href={proyect.pageLink.src} title='Visit proyect page'>
										<img
											className='proyect-logo'
											src={proyect.pageLink.img}
											alt='Site logo'
										/>
									</a>
									<a href={proyect.repoLink.src} title='Visit proyect repo'>
										<img
											className='proyect-logo'
											src={proyect.repoLink.img}
											alt='Github logo'
										/>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
