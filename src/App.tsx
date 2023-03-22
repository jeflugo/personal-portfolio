// *Styles
import './scss/App.scss'

// * Components
import Header from './components/Header'
import Goals from './components/Goals'
import Proyects from './components/Proyects'
import Contact from './components/Contact'

export default function App() {
	return (
		<>
			<Header />
			<Goals />
			<Proyects />
			<Contact />
		</>
	)
}
