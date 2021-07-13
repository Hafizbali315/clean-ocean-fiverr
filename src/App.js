import './App.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import HighlightedPoints from './components/HighlightedPoints'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import GetInTouch from './components/GetInTouch'

function App() {
	return (
		<div className="App">
			<Header />

			<LandingPage />

			<HighlightedPoints />

			<Features />

			<Roadmap />

			<GetInTouch />
		</div>
	)
}

export default App
